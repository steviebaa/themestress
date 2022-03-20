import React from 'react';
import {Code} from '../components/StyledTypography';

const marginProps = [
  ['margin', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['marginLeft', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['marginRight', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['marginTop', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['marginBottom', 'number', '', 'Multiplied by theme.spacing (px).'],
];
const paddingProps = [
  ['padding', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['paddingLeft', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['paddingRight', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['paddingTop', 'number', '', 'Multiplied by theme.spacing (px).'],
  ['paddingBottom', 'number', '', 'Multiplied by theme.spacing (px).'],
];

export const apiProps = {
  avatar: {
    props: [
      ['statusColor', 'string', '#44b700', 'The color of the status badge.'],
      ['noPulse', 'boolean', 'false', 'Disable the badge animation.'],
      ['noStatus', 'boolean', 'false', 'Hide the status badge.'],
      ['alt', 'string', '', 'The image alt text, also used for initials.'],
      ['src', 'string', '', 'The image url to use.'],
    ],
  },
  backdrop: {
    props: [
      ['onClick', 'Function', '', 'Invoked when the backdrop is clicked.'],
      [
        'zIndex',
        'number',
        'var(--sys-z-index-backdrop)',
        'Css z-index property.',
      ],
      ['bgColor', 'string', 'transparent', 'Css background-color property.'],
      ['fontColor', 'string', '', 'Css color property.'],
    ],
  },
  elevatedbutton: {
    props: [
      ['disableRipple', 'boolean', 'false', 'Disable the ripple effect.'],
      ['startIcon', '<svg/>', '', 'The icon on the left side.'],
      ['endIcon', '<svg/>', '', 'The icon on the right side.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
      ['elevation', 'string | number', '1', 'Between 0 and 5 inclusive.'],
      ['align', 'left | center | right', 'center', 'Css text-align property.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['radius', 'number', '', 'Multiplied by theme.spacing (px).'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '40px', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  filledbutton: {
    props: [
      ['disableRipple', 'boolean', 'false', 'Disable the ripple effect.'],
      ['startIcon', '<svg/>', '', 'The icon on the left side.'],
      ['endIcon', '<svg/>', '', 'The icon on the right side.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
      ['elevation', 'string | number', '0', 'Between 0 and 5 inclusive.'],
      ['align', 'left | center | right', 'center', 'Css text-align property.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['radius', 'number', '', 'Multiplied by theme.spacing (px).'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '40px', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  filledtonalbutton: {
    props: [
      ['disableRipple', 'boolean', 'false', 'Disable the ripple effect.'],
      ['startIcon', '<svg/>', '', 'The icon on the left side.'],
      ['endIcon', '<svg/>', '', 'The icon on the right side.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
      ['elevation', 'string | number', '0', 'Between 0 and 5 inclusive.'],
      ['align', 'left | center | right', 'center', 'Css text-align property.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['radius', 'number', '', 'Multiplied by theme.spacing (px).'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '40px', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  outlinedbutton: {
    props: [
      ['disableRipple', 'boolean', 'false', 'Disable the ripple effect.'],
      ['startIcon', '<svg/>', '', 'The icon on the left side.'],
      ['endIcon', '<svg/>', '', 'The icon on the right side.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
      ['elevation', 'string | number', '0', 'Between 0 and 5 inclusive.'],
      ['align', 'left | center | right', 'center', 'Css text-align property.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['borderColor', 'string', '', 'Css border-color property.'],
      ['borderWidth', 'string', '1px', 'Css border-width property.'],
      ['radius', 'number', '', 'Multiplied by theme.spacing (px).'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '40px', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  textbutton: {
    props: [
      ['startIcon', '<svg/>', '', 'The icon on the left side.'],
      ['endIcon', '<svg/>', '', 'The icon on the right side.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
      ['align', 'left | center | right', 'center', 'Css text-align property.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['radius', 'number', '', 'Multiplied by theme.spacing (px).'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '40px', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  fab: {
    props: [
      ['disableRipple', 'boolean', 'false', 'Disable the ripple effect.'],
      ['icon', '<svg/>', '', 'The icon to display.'],
      [
        'variant',
        `  surface 
| primary 
| secondary 
| tertiary`,
        'primary',
        'The icon to display.',
      ],
      ['small', 'boolean', 'false', 'Transform the FAB to a small size.'],
      ['large', 'boolean', 'false', 'Transform the FAB to a large size.'],
      ['lowered', 'boolean', 'false', 'Reduce the elevation to level 1.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
      ['elevation', 'string | number', '3', 'Between 0 and 5 inclusive.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['radius', 'number', '', 'Multiplied by theme.spacing (px).'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  card: {
    props: [
      ['variant', 'elevated | filled | outlined', 'filled', 'Card style.'],
      ['elevation', 'number', '1', 'From 0 to 5 inclusive.'],
      ['square', 'boolean', 'false', 'Square the corners.'],
      ['fontColor', 'string', '', 'Css color property.'],
      ['bgColor', 'string', '', 'Css background-color property.'],
      ['borderColor', 'string', '', 'Css border-color property.'],
      [
        'radius',
        'number',
        '12px',
        'Css border-radius. Multiplied by theme.spacing (px).',
      ],
      ['width', 'BreakPoin | string', '', 'Css width and max-width property.'],
      ['height', 'string', '', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  container: {
    props: [
      ['maxWidth', 'BreakPoint', 'md', 'Css max-width property.'],
      [
        'padding',
        'number',
        '6',
        'Sides only. Multiplied by theme.spacing (px).',
      ],
      ['fixed', 'boolean', 'false', 'Sets min-width to match max-width.'],
    ],
  },
  contextmenu: {
    props: [
      [
        'menuItems',
        'any[]',
        '',
        'An array of items, usually MenuItem components.',
      ],
      ['width', 'string', '', 'The width of the menu.'],
      [
        'anchorOrigin',
        'Transform',
        '',
        'The specific point of the anchor element to anchor to.',
      ],
      [
        'transformOrigin',
        'Transform',
        '',
        'The specific point of the menu to anchor to the anchor element.',
      ],
    ],
  },
  divider: {
    props: [
      ['vertical', 'boolean', 'false', 'For a vertical divider.'],
      ['weight', 'number', '1', 'The thickness of the line (px).'],
      ['bgColor', 'string', 'transparent', 'Css background-color property.'],
      ...marginProps,
    ],
  },
  flex: {
    props: [
      ['column', 'boolean', 'false', 'Css flex-direction property.'],
      ['columnReverse', 'boolean', 'false', 'Css flex-direction property.'],
      ['row', 'boolean', 'false', 'Css flex-direction property.'],
      ['rowReverse', 'boolean', 'false', 'Css flex-direction property.'],
      ['wrap', 'boolean', 'false', 'Css flex-wrap property.'],
      ['wrapReverse', 'boolean', 'false', 'Css flex-wrap property.'],
      ['fontColor', 'string', 'inherit', 'Css color property.'],
      ['bgColor', 'string', 'transparent', 'Css background-color property.'],
      ['width', 'string', '', 'Css width property.'],
      ['height', 'string', '', 'Css height property.'],
      ['justifyContent', 'JustifyProps', 'default', 'Css height property.'],
      ['alignItems', 'AlignProps', 'default', 'Css height property.'],
      ['alignSelf', 'AlignProps', 'default', 'Css height property.'],
      ['justifySelf', 'JustifyProps', 'default', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  icon: {
    props: [
      [
        'fill',
        'TColor',
        'neutral[800] | neutral[100]',
        'Css fill property. Defaults are theme dependant',
      ],
      ['size', 'sm | md | lg | string', 'sm', 'Svg height property.'],
    ],
  },
  menu: {
    props: [
      ['open', 'boolean', 'false', 'If the menu should be open.'],
      [
        'anchorElement',
        'MutableRefObject',
        '',
        'The ref of the anchor element.',
      ],
      ['onClose', 'Function', '', 'Executes when the menu should close.'],
      ['width', 'number', '', 'The width of the menu (px).'],
      [
        'anchorOrigin',
        'Transform',
        '{vertical: "bottom", horizontal: "left"}',
        'The anchor point of the anchor element.',
      ],
      [
        'transformOrigin',
        'Transform',
        '{vertical: "top", horizontal: "left"}',
        'The anchor point of the menu.',
      ],
      [
        'positionOverride',
        <span>
          {'x: number;'}
          <br />
          {'y: number;'}
        </span>,
        '',
        'Override the anchorOrigin with an absolute position of the window.',
      ],
    ],
  },
  menuitem: {
    extends: ['TextButton'],
  },
  nestedmenuitem: {
    props: [
      ['Extends MenuItemProps.', '', '', ''],
      ['content', 'ReactNode', '', 'Renders in the MenuItem.'],
      ['hideArrow', 'boolean', 'false', 'Hides the arrow on the MenuItem.'],
      ['menuProps', 'MenuProps', '', 'Pass props to the Menu.'],
    ],
  },
  basicdialog: {
    props: [
      ['open', 'boolean', 'false', 'If the dialog should be open.'],
      ['onClickAway', 'Function', '', 'Executes when the backdrop is clicked.'],
      ['backdropProps', 'BackdropProps', '', 'Pass props to the backdrop.'],
      ['width', 'BreakPoint', 'sm', 'Css width property.'],
      ['height', 'string', '', 'Css height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  fullscreendialog: {
    props: [
      ['open', 'boolean', 'false', 'If the dialog should be open.'],
      ['onClickAway', 'Function', '', 'Executes when the backdrop is clicked.'],
      ['zIndex', 'number', 'var(--sys-z-index-modal)', 'Css z-index property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
  navigationbar: {
    props: [
      ['selected', 'number', '', 'The index of the selected item.'],
      [
        'onSelectionChanged',
        'Function(selectedIndex: number)',
        '',
        'Triggered when another NavigationBarItem is clicked.',
      ],
    ],
  },
  navigationrail: {
    props: [
      ['selected', 'number', '', 'The index of the selected item.'],
      [
        'onTabChanged',
        'Function(selectedIndex: number)',
        '',
        'Triggered when another NavigationItem is clicked.',
      ],
    ],
  },
  navigationitem: {
    extends: ['TextButton'],
  },
  ripple: {
    props: [
      ['duration', 'number', '850', 'Duration of the ripple in milliseconds.'],
      [
        'bgColor',
        'TColor',
        'rgba(255,255,255,0.75)',
        'The color of the ripple.',
      ],
    ],
  },
  select: {
    props: [
      ['variant', 'outlined | filled', 'outlined', 'The input style.'],
      ['value', 'string | number', '', 'The current value of the textfield.'],
      [
        'onChange',
        'Function',
        '',
        <span>
          Callback for when the selected item changes. Access the{' '}
          <Code>MenuItem</Code> value via <Code>e.target.value</Code>.`
        </span>,
      ],
      [
        'defaultValue',
        'string | number',
        '',
        'Forward a default value to the input element.',
      ],
      ['label', 'string', '', 'The fieldset label.'],
      ['startIcon', 'ReactNode', '', 'The icon on the left side.'],
      ['endIcon', 'ReactNode', '', 'The icon on the right side.'],
      [
        'noEndIconRotate',
        'boolean',
        '',
        'Prevent the endIcon from rotating on menu open.',
      ],
      ['disabled', 'boolean', '', 'If the field is disabled.'],
      ['inputProps', 'React.InputHTMLAttributes<HTMLInputElement>', '', 'P.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
    ],
  },
  slider: {
    props: [
      ['width', 'string', '', 'Css width property.'],
      ['hideTooltip', 'boolean', 'false', 'Hide the handle tooltip.'],
      [
        'marks',
        'SliderMark[]',
        '',
        <span>
          An array of custom marks to use. <br />
          <Code>{'[{value: number, label: string}]'}</Code>
        </span>,
      ],
      ['value', 'number', '', 'The current value of the slider.'],
      [
        'min',
        'number',
        '',
        'The min value available on the slider when not using the marks prop.',
      ],
      [
        'max',
        'number',
        '',
        'The max value available on the slider when not using the marks prop.',
      ],
      [
        'step',
        'number',
        'Math.round((max - min) / 10)',
        'The step value of the slider when not using the marks prop.',
      ],
      ['hideMarkers', 'boolean', '', 'Hide the markers.'],
      ['hideLabels', 'boolean', '', 'Hide the labels.'],
      [
        'labelFrequency',
        `{
 start?:number;
 stop?:number;
 step?:number
}`,
        '',
        'Reduce the amount of labels displayed.',
      ],
      [
        'markerFrequency',
        `{
 start?:number;
 stop?:number;
 step?:number
}`,
        '',
        'Reduce the amount of markers displayed.',
      ],
      [
        'onChange',
        'Function(value:number)',
        '',
        'A callback function for when the state of the slider changes. Usually changes the state for the value prop.',
      ],
      [
        'onChangeCommitted',
        'Function(value:number)',
        '',
        <span>
          A callback function for when the user releases the slider. Should{' '}
          <strong>not</strong> be connected to the state for the value prop.
        </span>,
      ],
      ['handlePrimaryColor', 'string', 'primary', 'The color of the handle.'],
      [
        'handleSecondaryColor',
        'string',
        'primary (30% opacity)',
        'The color of the handle hover effect.',
      ],
      [
        'trackPrimaryColor',
        'string',
        'primary',
        'The color of the track to the left of the handle.',
      ],
      [
        'trackSecondaryColor',
        'string',
        'inverse-primary',
        'The color of the track to the right of the handle.',
      ],
      [
        'markPrimaryColor',
        'string',
        'on-primary',
        'The color of the markers to the left of the handle.',
      ],
      [
        'markSecondaryColor',
        'string',
        'primary',
        'The color of the markers to the right of the handle.',
      ],
    ],
  },
  snackbar: {
    props: [
      [
        'margin',
        `{
left?:number;
right?:number;
top?:number;
bottom?:number
}`,
        '',
        'Set margin to the edge of the screen (depends on position prop).',
      ],
      [
        'position',
        `top-left    | 
top-right   | 
bottom-left |
bottom-right`,
        'bottom-left',
        'The corner to display the snacks.',
      ],
      [
        'minWidth',
        'string',
        '',
        'Css min-width property of the container. Snacks expand to this container.',
      ],
    ],
  },
  usesnackbar: {
    props: [
      ['content', 'any', '', 'Inserted into the snack.'],
      [
        'variant',
        `null    | 
success | 
warning | 
error   | 
info`,
        '',
        'The styling variant.',
      ],
      ['width', 'string', '', 'Css width property of the snack.'],
      ['duration', 'number', '', 'Time to show the snack.'],
    ],
  },
  spacer: {
    props: [
      [
        'vertical',
        'boolean',
        'false',
        'If the spacer should expand vertically.',
      ],
      ['size', 'string', '', 'The width (or height) of the spacer.'],
      [
        'breakpoints',
        `{
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}`,
        '',
        'The width (or height) of the spacer.',
      ],
    ],
  },
  switch: {
    props: [
      ['checked', 'boolean', '', 'The input state.'],
      [
        'onChange',
        'Function(e: React. ChangeEvent< HTMLInputElement>)',
        '',
        'A callback for when the switch is toggled.',
      ],
      ['trackWidth', 'string', '', 'The width of the track.'],
      ['trackHeight', 'string', '', 'The height of the track.'],
      ['trackBorderRadius', 'string', '', 'The border radius of the track.'],
      [
        'trackColor',
        `{on?: string; 
off?: string}`,
        `inverse-primary;
outline;`,
        'Customize the color of the track for both states.',
      ],
      ['handleDiameter', 'string', '', 'The diameter of the handle.'],
      ['handleBorderRadius', 'string', '', 'The border radius of the handle.'],
      ['handleInset', 'string', '', 'The inset of the handle from the track.'],
      [
        'handleColor',
        `{on?: string;
off?: string}`,
        `primary; 
surface-variant;`,
        'Customize the color of the handle for both states.',
      ],
      ['noHandleShadow', 'string', '', 'Turn off the handle shadow.'],
      ['noHoverEffect', 'string', '', 'Turn off the handle outline on hover.'],
      ['disabled', 'string', '', 'If the switch is disabled.'],
    ],
  },
  textfield: {
    props: [
      ['variant', 'outlined | filled', 'outlined', 'The input style.'],
      ['value', 'string | number', '', 'The current value of the textfield.'],
      ['onChange', 'Function', '', 'Receives the input event on value change.'],
      [
        'defaultValue',
        'string | number',
        '',
        'Forward a default value to the input element.',
      ],
      ['label', 'string', '', 'The fieldset label.'],
      ['startIcon', 'ReactNode', '', 'The icon on the left side.'],
      ['endIcon', 'ReactNode', '', 'The icon on the right side.'],
      ['inputProps', 'React.InputHTMLAttributes<HTMLInputElement>', '', 'P.'],
      ['disabled', 'boolean', 'false', 'Disable the element.'],
    ],
  },
  tooltip: {
    props: [
      ['tip', 'ReactNode', '', 'The content of the tooltip.'],
      ['hide', 'boolean', 'false', 'Hide the tooltip.'],
      [
        'direction',
        'top | bottom | left | right',
        'top',
        'Which side of the wrapped component to render the tooltip.',
      ],
      [
        'delay',
        'number',
        '',
        'Time in milliseconds to wait before showing the tooltip.',
      ],
    ],
  },
  typography: {
    props: [
      [
        'variant',
        `  display-large
| display-medium
| display-small
| headline-large
| headline-medium
| headline-small
| title-large
| title-medium
| title-small
| label-large
| label-medium
| label-small
| body-large
| body-medium
| body-small`,
        'body-large',
        'The style of the typography.',
      ],
      ['fontSize', 'string', '', 'Default font size depends on variant.'],
      [
        'align',
        `center | inherit | justify |
left | right`,
        '',
        'Css text-align property.',
      ],
      [
        'element',
        'string',
        '',
        <span>
          Specify the html tag to use. E.g. <Code>span</Code>
        </span>,
      ],
      ['capitalize', 'boolean', 'false', 'Css text-transform property.'],
      ['uppercase', 'boolean', 'false', 'Css text-transform property.'],
      [
        'fontColor',
        'string',
        'inherit',
        'Auto adjusts if only bgColor is provided.',
      ],
      ['bgColor', 'string', 'transparent', 'Css background-color property.'],
      ['weight', 'number | string', '', 'Css font-weight property.'],
      ['bold', 'boolean', 'false', 'Applies a font-weight of bold.'],
      ['lineHeight', 'string', '', 'Css line-height property.'],
      ...marginProps,
      ...paddingProps,
    ],
  },
};
