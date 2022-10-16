import React from 'react';
import { CustomButton } from './wrapper.tsx';
import {ButtonProps} from './types.ts'

export const Button:ButtonProps = ({label, onClick}) => {
    return (
        <CustomButton onClick={onClick}> {label}</CustomButton>
    )
}