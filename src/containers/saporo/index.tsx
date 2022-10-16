import React, { useState } from 'react';
import { Detail } from '../../components/detail/index.tsx';
import { Header } from '../../components/header/index.tsx';
import { Items } from '../../components/items/index.tsx';
import { Container } from './wrapper.tsx';

export const Saporo = () => {

    const data:string[] = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5']
    const [item, setItem] = useState('');
    const [historicTracker, setHistoricTracker] = useState([null])

    const handleItems = (e) => {
        setItem(e.target.value)
        setHistoricTracker([...historicTracker.filter(a=>a), e.target.value])
    }

    const handleBack = () => {
        setHistoricTracker((previousArr) => (previousArr.slice(0, -1)))
    }

    return (
        <Container>  
            <Header
            data={historicTracker}
            onClick={handleBack}
            />
            <Detail
            title='Detail: '
            label={item}
            errorMessage='No info'
            />
            <Items
            data={data}
            onClick={handleItems}
            />
        </Container>
    )
}