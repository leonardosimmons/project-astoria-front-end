import React from 'react';
import { BaseOptions } from '../../utils/types';

type Props = {
  toggle?: boolean;
  label?: string | JSX.Element | HTMLElement;
  labelFront?: string | JSX.Element | HTMLElement;
  labelBack?: string | JSX.Element | HTMLElement;
} & BaseOptions;

const Input: React.FunctionComponent<Props> = (
  { 
    parent,
    toggle,
    value,
    label,
    labelFront,
    labelBack,
    changed,
    styles,
    clicked
  }
): JSX.Element => {
  return (
      toggle ? 
      <React.Fragment>
        <input 
          className={`${ styles && styles.checkbox } ${ parent }__checkbox`} 
          id={`${ parent }__toggle`} 
          type="checkbox"
          value={ value } 
          onChange={ clicked } />
        <label className={`${ styles && styles.checkboxBtn } ${ parent }__checkbox--button`} htmlFor={`${ parent }__toggle`}>
          <span className={`${ styles && styles.checkboxBtnIcon } ${ parent }__checkbox--button--icon`}>{ label || ''}</span>
        </label> 
      </React.Fragment>
      : 
      <React.Fragment>
        {
          labelFront && 
          <label className={`${ styles && styles.labelFront } ${ parent }__label-front`} htmlFor={`${ parent }__input`}>
            { labelFront }
          </label>
        }
        <input 
          className={`${ styles && styles.input } ${ parent }__input`} 
          id={`${ parent }__input`} 
          type="text" 
          autoComplete="off"
          value={ value }
          onClick={ clicked }
          onChange={ changed }/>
        {
          labelBack && 
          <label className={`${ styles && styles.labelBack } ${ parent }__label-back`} htmlFor={`${ parent }__input`}>
            { labelBack }
          </label>
        }
      </React.Fragment>
  )
};

export default Input;
