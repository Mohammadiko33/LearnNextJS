"use client"
import React from 'react';

interface Props { error: ReferenceError }

const ForgetPasswordError = (props: Props) => <div>{props.error.message} ,you need contact with support site</div>

export default ForgetPasswordError;