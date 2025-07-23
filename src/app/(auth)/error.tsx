"use client"
import React from 'react';

interface Props { error: ReferenceError }

const ErrorAuth = (props: Props) => <div>in (auth) route folder and : {props.error.message} ,you need contact with support site</div>

export default ErrorAuth;