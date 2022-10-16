import styled from 'styled-components'

export const HistoricalTrackerContainer = styled.div`
    display: flex ;
    justify-content: center;
`
export const HistoricalTracker = styled.div`
    display: flex;
    justify-content: center;
    border-color: rgba(33,37,41,0.15);
    border-style: double;
    border-radius: .25em;
    margin-left: 0.5em;
    &:after {
    content: " >";
    display: flex;
    align-items: center;
    padding: 0 1em;
    }
    &:last-child::after { 
    display: none; }
    & :nth-child(1) {
        text-align: center;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3em;
`

export const Paragraph = styled.p`
    padding: 0 15px;
`