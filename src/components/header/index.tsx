import React from 'react';
import { Item } from '../../components/item/index.tsx';
import { Button } from '../button/index.tsx';
import { HeaderProps } from './types.ts';
import {HistoricalTrackerContainer, HistoricalTracker, Container, Paragraph} from './wrapper.tsx'

export const Header:HeaderProps = ({data, onClick}) => {
    return (
        <Container>
            <Button onClick={onClick} label='Back' />
            <HistoricalTrackerContainer>
                { data.map(label => {
                    return (
                        <HistoricalTracker key={label}>
                            { label === null ? <Paragraph>Please select an item</Paragraph> : <Item label={label}/> }
                        </HistoricalTracker>
                        ) 
                    }
                ) }
            </HistoricalTrackerContainer>
        </Container>
    )
}