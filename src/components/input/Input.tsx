import React from 'react';

type Props = {
  parent: string;
  value?: string;
  toggle?: boolean;
  label?: string | JSX.Element | HTMLElement;
  labelFront?: string | JSX.Element | HTMLElement;
  labelBack?: string | JSX.Element | HTMLElement;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clicked?: () => void;
};

const Input: React.FunctionComponent<Props> = (
  { 
    parent,
    toggle,
    value,
    label,
    labelFront,
    labelBack,
    changed, 
    clicked
  }
): JSX.Element => {
  return (
      toggle ? 
      <React.Fragment>
        <input 
          className={`${ parent }__checkbox`} 
          id={`${ parent }__toggle`} 
          type="checkbox"
          value={ value } 
          onChange={ clicked } />
        <label className={`${ parent }__checkbox--button`} htmlFor={`${ parent }__toggle`}>
          <span className={`${ parent }__checkbox--button--icon`}>{ label || ''}</span>
        </label> 
      </React.Fragment>
      : 
      <React.Fragment>
        {
          labelFront && 
          <label className={`${ parent }__label-front`} htmlFor={`${ parent }__input`}>
            { labelFront }
          </label>
        }
        <input 
          className={`${ parent }__input`} 
          id={`${ parent }__input`} 
          type="text" 
          autoComplete="off"
          value={ value }
          onClick={ clicked }
          onChange={ changed }/>
        {
          labelBack && 
          <label className={`${ parent }__label-back`} htmlFor={`${ parent }__input`}>
            { labelBack }
          </label>
        }
      </React.Fragment>
  )
};

export default Input;
