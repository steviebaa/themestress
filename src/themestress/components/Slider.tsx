import React, {
  Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import styled from '@emotion/styled';
import {Tooltip} from './Tooltip';
import {ColorUtility} from '../core/classes/base/ColorUtility';

export interface SliderMark {
  value: number;
  label?: string;
}
interface CalculatedMarkObject extends SliderMark {
  dist: number;
}
export interface SliderProps {
  ref?: Ref<HTMLSpanElement>;
  width?: string;
  marks?: SliderMark[];
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  hideMarkers?: boolean;
  hideLabels?: boolean;
  labelFrequency?: {start?: number; stop?: number; step?: number};
  markerFrequency?: {start?: number; stop?: number; step?: number};
  onChange?: (value: number) => void;
  onChangeCommitted?: (value: number) => void;
  handlePrimaryColor?: string;
  handleSecondaryColor?: string;
  trackPrimaryColor?: string;
  trackSecondaryColor?: string;
  markPrimaryColor?: string;
  markSecondaryColor?: string;
  hideTooltip?: boolean;
}

const StyledSliderGroup = styled.span<SliderProps>`
  width: ${({width}) => width ?? '300px'};
  height: 4px;
  border-radius: 12px;
  box-sizing: content-box;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  color: inherit;
  padding: 13px 0;
  margin-bottom: ${({hideLabels}) => !hideLabels && '20px'};
  user-select: none;
`;
const StyledTrack = React.memo(styled.span<{sColor: string}>`
  position: absolute;
  display: block;
  border-radius: inherit;
  width: 100%;
  height: inherit;
  background-color: ${({sColor}) =>
    sColor ?? 'var(--sys-color-inverse-primary)'};
`);

const StyledProgress = styled.span<{progress: number; pColor: string}>`
  position: absolute;
  display: block;
  border-radius: inherit;
  width: ${({progress}) => progress}%;
  height: inherit;
  background-color: ${({pColor}) => pColor ?? 'var(--sys-color-primary)'};
`;

const StyledHandle = styled.span<{
  progress: number;
  pColor: string;
  sColor: string;
}>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  top: 50%;
  left: ${({progress}) => progress}%;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  background-color: ${({pColor}) => pColor ?? 'var(--sys-color-primary)'};
  &:hover {
    box-shadow: 0px 0px 0px 5px
      ${({theme, sColor}) =>
        sColor ??
        ColorUtility.rgb.set.opacity(theme.palette.primary.main.rgb, 0.3)};
  }
  &:active {
    box-shadow: 0px 0px 0px 8px
      ${({theme, sColor}) =>
        sColor ??
        ColorUtility.rgb.set.opacity(theme.palette.primary.main.rgb, 0.3)};
  }
`;

const StyledMarker = React.memo(styled.span<{
  progress: number;
  position: number;
  pColor: string;
  sColor: string;
}>`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({position}) => position}%;

  background-color: ${({progress, position, pColor, sColor}) => {
    return progress > position
      ? pColor ?? 'var(--sys-color-on-primary)'
      : sColor ?? 'var(--sys-color-primary)';
  }};
`);

const StyledLabel = React.memo(styled.span<{position: number}>`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  position: absolute;
  white-space: nowrap;
  transform: translateX(-50%);
  top: 30px;
  left: ${({position}) => position}%;
`);

/* Utility functions */
const getNearest = (marks: CalculatedMarkObject[], goal: number) => {
  return marks.reduce((p, c) =>
    Math.abs(c.dist - goal) < Math.abs(p.dist - goal) ? c : p,
  );
};

export const Slider: React.FC<SliderProps> = React.forwardRef(
  (
    {
      onChange,
      onChangeCommitted,
      value,
      min,
      max,
      step,
      labelFrequency,
      markerFrequency,
      marks,
      hideMarkers,
      hideLabels,
      handlePrimaryColor,
      handleSecondaryColor,
      trackPrimaryColor,
      trackSecondaryColor,
      markPrimaryColor,
      markSecondaryColor,
      hideTooltip,
      ...props
    }: SliderProps,
    ref: MutableRefObject<HTMLSpanElement>,
  ) => {
    const sliderGroupRef = ref || useRef<HTMLSpanElement>(null);
    const handleRef = useRef<HTMLSpanElement>(null);
    const [isHandleDown, setIsHandleDown] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(value);

    /** Create marks if none provided */
    if (!marks) {
      marks = [];
      min = min ?? 0;
      max = max ?? 100;
      step = step ?? Math.round((max - min) / 10);

      for (let i = min; i < max; i += step) {
        const v = Number(i.toFixed(8));
        marks.push({value: v, label: `${v}`});
      }
      marks.push({value: max, label: `${max}`});
    }

    /** Make sure value is set to an allowable value */
    const allowableValues = marks.map(m => m.value);
    if (!allowableValues.includes(value)) value = allowableValues[0];

    /** Add extra calculated props to provided marks */
    const _marks = useMemo((): CalculatedMarkObject[] => {
      return marks.map((mark, i) => {
        const dist = (i / (marks.length - 1)) * 100;
        return {...mark, dist};
      });
    }, [marks]);

    /** Event handlers */
    const handlePointerMoveEvent = (e: MouseEvent) => handleMouseMove(e);
    const handlePointerUpEvent = () => {
      if (!isHandleDown) return;
      setIsHandleDown(false);
      handleChangeCommitted(progress);
    };

    const handleSliderClick = (e: React.MouseEvent | MouseEvent) => {
      const groupPos = sliderGroupRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - groupPos.x) / groupPos.width) * 100;
      const closest = getNearest(_marks, percentage).value;

      if (closest === value) return;
      handleChange(closest);
      handleChangeCommitted(closest);
    };

    const handleChangeCommitted = (newValue: number) => {
      onChangeCommitted && onChangeCommitted(newValue);
      setIsHandleDown(false);
    };

    const handleChange = (newValue: number) => onChange && onChange(newValue);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHandleDown) return;

      const groupPos = sliderGroupRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - groupPos.x) / groupPos.width) * 100;
      const inDomain = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;

      if (progress === inDomain) return;

      // Lock to markers
      const closest = getNearest(_marks, inDomain).value;
      if (value === closest) return;
      handleChange(closest);
      setProgress(closest);
    };

    /** Set event listeners */
    useEffect(() => {
      if (!handleRef) return null;
      window.addEventListener('pointermove', handlePointerMoveEvent);
      window.addEventListener('pointerup', handlePointerUpEvent);

      return () => {
        window.removeEventListener('pointermove', handlePointerMoveEvent);
        window.removeEventListener('pointerup', handlePointerUpEvent);
      };
    }, [handleRef, handlePointerMoveEvent]);

    /** Calculate handle position */
    const handlePosition = _marks.find(m => m.value === value).dist;

    /** Create markers */
    const markers: JSX.Element[] = [];
    for (
      let i = markerFrequency?.start ?? 0;
      i < (markerFrequency?.stop ?? _marks.length);
      i += markerFrequency?.step ?? 1
    ) {
      const mark = _marks[i];
      markers.push(
        <StyledMarker
          key={mark.dist}
          progress={handlePosition}
          position={mark.dist}
          pColor={markPrimaryColor}
          sColor={markSecondaryColor}
        />,
      );
    }

    /** Create labels */
    const labels: JSX.Element[] = [];
    for (
      let i = labelFrequency?.start ?? 0;
      i < (labelFrequency?.stop ?? _marks.length);
      i += labelFrequency?.step ?? 1
    ) {
      const mark = _marks[i];
      labels.push(
        <StyledLabel key={mark.label} position={mark.dist}>
          {mark.label}
        </StyledLabel>,
      );
    }

    return (
      <StyledSliderGroup
        className="_Slider-Group"
        ref={sliderGroupRef}
        onClick={handleSliderClick}
        hideLabels={hideLabels}
        {...props}
      >
        <StyledTrack className="_Slider-Track" sColor={trackSecondaryColor} />

        <StyledProgress
          pColor={trackPrimaryColor}
          progress={handlePosition}
          className="_Slider-Progress"
        />
        {!hideMarkers && markers}
        {!hideLabels && labels}

        <Tooltip className="_Slider-Tooltip" tip={value} hide={hideTooltip}>
          <StyledHandle
            ref={handleRef}
            onMouseDown={() => setIsHandleDown(true)}
            progress={handlePosition}
            className="_Slider-Handle"
            pColor={handlePrimaryColor}
            sColor={handleSecondaryColor}
          />
        </Tooltip>
      </StyledSliderGroup>
    );
  },
);
