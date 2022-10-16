import React from 'react';
import { ItemProps } from './types';
import { StyledInput } from './wrapper.tsx';

export const Item:ItemProps = ({label}) => {
    return(
        <StyledInput value={label} />
    )
}