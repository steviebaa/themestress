import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { Tooltip } from './Tooltip';
import { transparent } from '../core/themeUtils';

/* Interfaces */
interface MarkObject {
  value: number;
  label?: string;
}
interface CalculatedMarkObject extends MarkObject {
  dist: number;
}
export interface SliderProps {
  marks?: MarkObject[];
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  snap?: boolean;
  hideMarkers?: boolean;
  hideLabels?: boolean;
  onChange?: (value: number) => void;
  onChangeCommitted?: (value: number) => void;
}

/* Styled Components */
const SliderGroup = styled.span`
  width: 100%;
  height: 4px;
  border-radius: 12px;
  box-sizing: content-box;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  color: inherit;
  padding: 13px 0;
  margin-bottom: 20px;
  user-select: none;
`;
const Track = styled.span`
  position: absolute;
  display: block;
  border-radius: inherit;
  width: 100%;
  height: inherit;
  background-color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0.3;
`;
const Progress = styled.span<{ progress: number }>`
  position: absolute;
  display: block;
  border-radius: inherit;
  width: ${({ progress }) => progress}%;
  height: inherit;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
const Handle = styled.span<{ progress: number }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.primary.main};
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({ progress }) => progress}%;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  &:hover {
    box-shadow: 0px 0px 0px 5px
      ${({ theme }) => transparent(theme.palette.primary.main, 0.3)};
  }

  &:active {
    box-shadow: 0px 0px 0px 8px
      ${({ theme }) => transparent(theme.palette.primary.main, 0.3)};
  }
`;
const Marker = styled.span<{ progress: number; position: number }>`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ theme, progress, position }) => {
    return progress > position
      ? theme.palette.primary.on
      : theme.palette.primary.main;
  }};
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({ position }) => position}%;
`;
const Label = styled.span<{ position: number }>`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  position: absolute;
  white-space: nowrap;
  transform: translateX(-50%);
  top: 30px;
  left: ${({ position }) => position}%;
`;

/* Utility functions */
const getNearest = (marks: CalculatedMarkObject[], goal: number) => {
  return marks.reduce((p, c) =>
    Math.abs(c.dist - goal) < Math.abs(p.dist - goal) ? c : p,
  );
};
function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  wait: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  };
}

export const Slider: React.FC<SliderProps> = ({
  onChange,
  onChangeCommitted,
  value,
  min,
  max,
  step,
  marks,
  hideMarkers,
  hideLabels,
}: SliderProps) => {
  const sliderGroupRef = useRef(null);
  const handleRef = useRef(null);
  const [isHandleDown, setIsHandleDown] = useState(false);
  const [progress, setProgress] = useState(value);

  /** Create marks if none provided */
  if (!marks) {
    marks = [];
    min = min ?? 0;
    max = max ?? 100;
    step = step ?? Math.round((max - min) / 10);

    for (let i = min; i < max; i += step) {
      const v = Number(i.toFixed(8));
      marks.push({ value: v, label: `${v}` });
    }
    marks.push({ value: max, label: `${max}` });
  }

  /** Make sure value is set to an allowable value */
  const allowableValues = marks.map((m) => m.value);
  if (!allowableValues.includes(value)) value = allowableValues[0];

  /** Add extra calculated props to provided marks */
  const _marks = useMemo((): CalculatedMarkObject[] => {
    return marks.map((mark, i) => {
      const dist = (i / (marks.length - 1)) * 100;
      return { ...mark, dist };
    });
  }, [marks]);

  /** Event handlers */
  const handlePointerMoveEvent = (e: MouseEvent) => handleMouseMove(e);
  const handlePointerUpEvent = () => handleChangeCommitted(progress);
  const handleSliderClick = (e: React.MouseEvent) => {
    const groupPos = sliderGroupRef.current.getBoundingClientRect();
    const percentage = ((e.clientX - groupPos.x) / groupPos.width) * 100;
    const closest = getNearest(_marks, percentage);
    handleChangeCommitted(closest.value);
  };
  const handleChangeCommitted = debounce((newValue: number) => {
    if (onChangeCommitted) onChangeCommitted(newValue);
    setIsHandleDown(false);
  }, 20);
  const handleMouseMove = (e: MouseEvent) => {
    if (!isHandleDown) return;

    const groupPos = sliderGroupRef.current.getBoundingClientRect();
    const percentage = ((e.x - groupPos.x) / groupPos.width) * 100;
    const bounded = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;

    if (!onChange || progress === bounded) return;

    // Lock to markers
    const closest = getNearest(_marks, bounded);
    if (value !== closest.value) {
      onChange(closest.value);
      setProgress(closest.value);
    }
  };

  /** Set event listeners */
  useEffect(() => {
    if (!handleRef) return null;

    window.addEventListener('pointerup', handlePointerUpEvent);
    window.addEventListener('pointermove', handlePointerMoveEvent);

    return () => {
      window.removeEventListener('pointerup', handlePointerUpEvent);
      window.removeEventListener('pointermove', handlePointerMoveEvent);
    };
  }, [handleRef, handlePointerUpEvent, handlePointerMoveEvent]);

  /** Calculate handle position */
  const handlePosition = _marks.find((m) => m.value === value).dist;

  /** Create markers */
  const markers = _marks.map((m) => (
    <Marker key={m.dist} progress={handlePosition} position={m.dist} />
  ));

  /** Create labels */
  const labels = useMemo(
    () =>
      _marks.map((m) => (
        <Label key={m.label} position={m.dist}>
          {m.label}
        </Label>
      )),
    [marks],
  );

  return (
    <SliderGroup
      className="_Slider-Group"
      ref={sliderGroupRef}
      onClick={handleSliderClick}
    >
      <Track className="_Slider-Track" />
      <Progress progress={handlePosition} className="_Slider-Progress" />
      {!hideMarkers && markers}
      {!hideLabels && labels}

      <Tooltip tip={value}>
        <Handle
          ref={handleRef}
          onMouseDown={() => setIsHandleDown(true)}
          progress={handlePosition}
          className="_Slider-Handle"
        />
      </Tooltip>
    </SliderGroup>
  );
};
