"use client";
import React from 'react';

interface Props { error: Error }

const error = ({error}: Props) => <div className='rsc text-5xl capitalize'>{error.message.includes("NOTFOUND") ? "What kind of shitty internet do you have?!" : error.message}</div>

export default error;