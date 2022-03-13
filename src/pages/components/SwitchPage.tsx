import React, {useState} from 'react';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {SampleBox} from '@components/SampleBox';
import {Code, P, Subheading} from '@components/StyledTypography';
import {TypeScript} from '@components/TypeScript';
import {
  Flex,
  MenuItem,
  OutlinedButton,
  Select,
  Slider,
  Spacer,
  Switch,
  SwitchProps,
} from '@themestress/components';

export const SwitchPage = () => {
  const [variant, setVariant] = useState<SwitchProps['variant']>('default');
  const [trackWidth, setTrackWidth] = useState('');
  const [trackHeight, setTrackHeight] = useState('');
  const [trackBorderRadius, setTrackBorderRadius] = useState('');
  const [handleDiameter, setHandleDiameter] = useState('');
  const [handleBorderRadius, setHandleBorderRadius] = useState('');
  const [handleInset, setHandleInset] = useState('');

  const [on, setOn] = useState(false);

  return (
    <>
      <PageHeader />

      <P>For toggling boolean values.</P>

      <Subheading>Playground</Subheading>
      <P>
        If you choose a variant, that preset will be applied before applying any
        additional props.
      </P>
      <SampleBox>
        <Flex justifyContent="space-around" width="100%">
          <Flex column width="60%">
            <Flex alignItems="center" justifyContent="space-between">
              <Code>variant</Code>
              <Spacer size="20px" />
              <Select
                value={variant}
                onChange={e =>
                  setVariant(e.target.value as SwitchProps['variant'])
                }
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="ios">iOS</MenuItem>
                <MenuItem value="android">Android</MenuItem>
              </Select>
            </Flex>
            <br />

            <Flex alignItems="center" justifyContent="space-between">
              <Code>trackWidth</Code>
              <Spacer size="20px" />
              <Slider
                value={Number(trackWidth)}
                onChange={v => setTrackWidth(v.toString())}
								hideMarkers
                min={20}
                max={50}
                step={1}
                width={'240px'}
                hideLabels
              />
            </Flex>

            <Flex alignItems="center" justifyContent="space-between">
              <Code>trackHeight</Code>
              <Spacer size="20px" />
              <Slider
                value={Number(trackHeight)}
                onChange={v => setTrackHeight(v.toString())}
								hideMarkers
                min={10}
                max={50}
                step={1}
                width={'240px'}
                hideLabels
              />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Code>trackBorderRadius</Code>
              <Spacer size="20px" />
              <Slider
                value={Number(trackBorderRadius)}
                onChange={v => setTrackBorderRadius(v.toString())}
								hideMarkers
                min={0}
                max={26}
                step={1}
                width={'240px'}
                hideLabels
              />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Code>handleDiameter</Code>
              <Spacer size="20px" />
              <Slider
                value={Number(handleDiameter)}
                onChange={v => setHandleDiameter(v.toString())}
								hideMarkers
                min={10}
                max={50}
                step={1}
                width={'240px'}
                hideLabels
              />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Code>handleBorderRadius</Code>
              <Spacer size="20px" />
              <Slider
                value={Number(handleBorderRadius)}
                onChange={v => setHandleBorderRadius(v.toString())}
								hideMarkers
                min={0}
                max={26}
                step={1}
                width={'240px'}
                hideLabels
              />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Code>handleInset</Code>
              <Spacer size="20px" />
              <Slider
                value={Number(handleInset)}
                onChange={v => setHandleInset(v.toString())}
								hideMarkers
                min={-10}
                max={10}
                step={1}
                width={'240px'}
                hideLabels
              />
            </Flex>
            <br />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <OutlinedButton
                width="100%"
                onClick={() => {
                  setVariant('default');
                  setTrackWidth('');
                  setTrackHeight('');
                  setTrackBorderRadius('');
                  setHandleDiameter('');
                  setHandleBorderRadius('');
                  setHandleInset('');
                }}
              >
                Reset
              </OutlinedButton>
            </Flex>
          </Flex>

          <Flex alignItems="center" justifyContent="space-around" width="40%">
            <Switch
              checked={on}
              variant={variant}
              onChange={e => setOn(e.target.checked)}
              trackWidth={trackWidth ? trackWidth + 'px' : null}
              trackHeight={trackHeight ? trackHeight + 'px' : null}
              trackBorderRadius={
                trackBorderRadius ? trackBorderRadius + 'px' : null
              }
              handleDiameter={handleDiameter ? handleDiameter + 'px' : null}
              handleBorderRadius={
                handleBorderRadius ? handleBorderRadius + 'px' : null
              }
              handleInset={handleInset ? handleInset + 'px' : null}
            />
          </Flex>
        </Flex>
      </SampleBox>
      <TypeScript
        code={`const ThemeSwitch = () => {
  const [on, setOn] = useState(false);

  return (
    <Switch
      checked={on}
      onChange={e => setOn(e.target.checked)}${
        variant === 'default' ? '' : `\n      variant="${variant}"`
      }${trackWidth && `\n      trackWidth={${trackWidth}px}`}${
          trackHeight && `\n      trackHeight={${trackHeight}px}`
        }${
          trackBorderRadius &&
          `\n      trackBorderRadius={${trackBorderRadius}px}`
        }${handleDiameter && `\n      handleDiameter={${handleDiameter}px}`}${
          handleBorderRadius &&
          `\n      handleBorderRadius={${handleBorderRadius}px}`
        }${handleInset && `\n      handleInset={${handleInset}px}`}
    />
  )
}`}
      />

      <ApiTable />
    </>
  );
};
