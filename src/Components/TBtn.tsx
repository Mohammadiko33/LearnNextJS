"use client";
import React from 'react';

interface Props {
  onClick?: () => void,
  classNames?: string,
  title: string,
}

const TBtn = ({onClick,classNames,title}: Props) => <button className={`bg-sky-500 capitalize rounded-lg p-3 cursor-pointer duration-150 hover:bg-sky-600 shadow-lg focus:shadow-sky-600 ${classNames}`} onClick={onClick}>{title}</button>

export default TBtn;