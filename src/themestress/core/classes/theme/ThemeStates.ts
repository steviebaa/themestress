import {addStyleHelper} from '@themestress/core';
import {mergeDeep} from '../../utils/helpers';

interface StateLayerProps {
  opacity: number;
}

export interface ThemeStatesProps {
  hover: StateLayerProps;
  focus: StateLayerProps;
  press: StateLayerProps;
  drag: StateLayerProps;
}

export interface ThemeStatesInitializer extends Partial<ThemeStatesProps> {}

export class ThemeStates implements ThemeStatesProps {
  public hover = {opacity: 0.08};
  public focus = {opacity: 0.12};
  public press = {opacity: 0.12};
  public drag = {opacity: 0.16};

  constructor(stateLayerProps: ThemeStatesInitializer = {}) {
    this._assignInput(stateLayerProps);
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    ['hover', 'focus', 'press', 'drag'].forEach(type => {
      addStyle(
        `md-sys-state-${type}-state-layer-opacity`,
        `${this[type].opacity}`,
      );
    });
  };

  private _assignInput = ({
    hover,
    focus,
    press,
    drag,
  }: ThemeStatesInitializer) => {
    this.hover = mergeDeep(this.hover, hover) as StateLayerProps;
    this.focus = mergeDeep(this.focus, focus) as StateLayerProps;
    this.press = mergeDeep(this.press, press) as StateLayerProps;
    this.drag = mergeDeep(this.drag, drag) as StateLayerProps;
  };
}
