import styled from 'styled-components'

export const TableContainer = styled.div`
    display: flex ;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
`
export const Table = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    align-items: center;
    padding: 0 10px;
    border-color: rgba(33,37,41,0.15);
    border-style: double;
    margin: 5px 0;
    border-radius: .25rem;
    &:before {
    content: " +";
    }
`