import React from 'react';
import { AmountToken, Combinable } from '../../utils/types';


/**
 * Calculates and formates amount into given currency
 * @param param0 
 * @returns 
 */
export function formatAmount({amount, quantity, currency}: AmountToken): string {
  const numFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  });

  const parts: Array<Intl.NumberFormatPart> = numFormat.formatToParts(amount);

  for (let part of parts) {
    if (part.type === 'decimal') {
      return numFormat.format(amount * quantity);
    }
  }

  const total: number = parseInt((quantity * amount).toFixed(amount));

  return numFormat.format(total);
};

//* getAuthToken
export function getAuthToken() {
  return JSON.parse(localStorage.getItem('auth-token') as string);
};

//* handleInput
/**
 * consumes input change event and passes to provided function (fn)
 * @param fn - function to which the event is to be passed
 * @returns 
 */
export const handleInput = ((fn: React.Dispatch<React.SetStateAction<string | undefined>>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
  fn(e.target.value);
});

//* handleInputRef
/**
 * places a ref on the given input element
 * @param ref - input reference
 * @returns 
 */
export const handleInputRef = (ref: React.MutableRefObject<string | number | undefined>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
  ref.current = e.target.value;
};

//* preg_match
/**
 * Checks the given regular expression against the given parameter
 * @param regex - regular expression
 * @param s - string or number to be checked
 */
export function preg_match(regex: string, c: Combinable): boolean | undefined {
  if (typeof c === 'string')
    return (new RegExp(regex).test(c));
  if (typeof c === 'number') 
    return (new RegExp(regex).test(c.toString()));
};

//* preventDefault
/**
 * prevents form default action and passes event to given function (inline in render function)
 * @param fn - function to which the event is to be passed
 * @returns 
 */
export const preventDefault = (fn: (e: React.FormEvent) => void ) => (e: React.FormEvent): void => {
  e.preventDefault();
  fn(e);
};

//* rand
/**
 * Generates a random number based on the given range
 * @param min 
 * @param max 
 * @returns 
 */
export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//* reset auth token
export function resetLocal(key: string) {
  localStorage.setItem(key, '');
};

//* storeLocal
export function storeLocal<T>(name: string, data: T): void {
  localStorage.setItem(name, JSON.stringify(data));
};

//* strShortener
/**
 * Checks the given strings length against the given length and returns a shortened version if necessary
 * @param s - string
 * @param len - length
 * @param concat - addon to end of string
 * @returns 
 */
export function strShortener(s: string, len: number, concat?: string): string {
  if (s) {
    let strArr: Array<string> = s.split('');
    let newStr: string = '';
    
    if (len < s.length) {
      for (let i=0; i < len; i++) {
        newStr = newStr.concat(strArr[i]);
      }
    }
    else {
      newStr = s;
    }
    
    if(concat) {
      newStr = newStr.concat(concat);
    }
    
    return newStr;
  };

  return '';
};

//* storeScrollPosition
/**
 * watches and stores current user's scroll position
 */
 export function storeScrollPosition() {
  document.documentElement.dataset.scroll = window.scrollY.toString();
};
