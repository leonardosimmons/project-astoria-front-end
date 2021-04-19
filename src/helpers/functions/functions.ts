import React from "react";

/**
 * watches and stores current user's scroll position
 */
export function storeScrollPosition() {
  document.documentElement.dataset.scroll = window.scrollY.toString();
};

/**
 * prevents form default action and passes event to given function (inline in render function)
 * @param fn - function to which the event is to be passed
 * @returns 
 */
export const preventDefault = (fn: (e: React.FormEvent) => void ) => (e: React.FormEvent): void => {
  e.preventDefault();
  fn(e);
};

/**
 * consumes input change event and passes to provided function (fn)
 * @param fn - function to which the event is to be passed
 * @returns 
 */
export const handleInput = (fn: (i: string | number) => void) => (e: React.ChangeEvent<HTMLInputElement>): void => {
  fn(e.target.value);
};

/**
 * places a ref on the given input element
 * @param ref - input reference
 * @returns 
 */
export const handleInputRef = (ref: React.MutableRefObject<string | number | undefined>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
  ref.current = e.target.value;
};