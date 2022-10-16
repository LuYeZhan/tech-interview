import React from 'react';
import { DetailProps } from './types.ts';
import { DetailContainer } from './wrapper.tsx';

export const Detail:DetailProps = ({title ,label, errorMessage}) => {
    return (
        <DetailContainer>
            <p>{title}</p>
            { label ? <p>{label}</p> : <p>{errorMessage}</p>}
        </DetailContainer>
    )
}