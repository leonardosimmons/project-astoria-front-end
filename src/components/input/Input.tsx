import React from 'react';
import { BaseOptions } from '../../utils/types';

type Props = {
  col?: boolean;
  toggle?: boolean;
  placeholder?: string;
  autoComplete?: boolean;
  label?: string | JSX.Element | HTMLElement;
  labelFront?: string | JSX.Element | HTMLElement;
  labelBack?: string | JSX.Element | HTMLElement;
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
} & BaseOptions;

const Input: React.FunctionComponent<Props> = (
  { 
    parent,
    col,
    toggle,
    value,
    type,
    label,
    labelFront,
    labelBack,
    placeholder,
    autoComplete,
    changed,
    styles,
    clicked
  }
): JSX.Element => {
  return (
      toggle ? 
      <React.Fragment>
        <input 
          className={`${ styles && styles.checkbox } ${ parent ? parent + '__checkbox' : ''}`} 
          id={`${ parent }__toggle`} 
          type="checkbox"
          value={ value } 
          onChange={ clicked } />
        <label className={`${ styles && styles.checkboxBtn } ${ parent ? parent + '__checkbox--button' : '' }`} htmlFor={`${ parent }__toggle`}>
          <span className={`${ styles && styles.checkboxBtnIcon } ${ parent ? parent + '__checkbox--button--icon' : '' }`}>{ label || ''}</span>
        </label> 
      </React.Fragment>
      : 
      <React.Fragment>
        {
          labelFront && 
          <label className={`${ styles && styles.labelFront } ${ parent ? parent + '__label-front' : ''}`} htmlFor={`${ parent ? parent + '__input' : ''}`}
          >
            { labelFront }
          </label>
        }
        { col ? <br></br> : '' }
        <input 
          className={`${ styles && styles.input } ${ parent ? parent + '__input' : ''}`} 
          id={`${ parent ? parent + '__input' : ''}`} 
          type={ type ? type : "text" } 
          autoComplete={ autoComplete ? "on" : "off" }
          placeholder={ placeholder ? placeholder : '' }
          value={ value }
          onClick={ clicked }
          onChange={ changed }
        />
        { col ? <br></br> : ''}
        {
          labelBack && 
          <label className={`${ styles && styles.labelBack } ${ parent ? parent + '__label-back' : ''}`} htmlFor={`${ parent ? parent + '__input' : ''}`}
          >
            { labelBack }
          </label>
        }
      </React.Fragment>
  )
};

export default Input;
