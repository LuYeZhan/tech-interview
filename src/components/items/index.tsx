import React from 'react';
import { Item } from '../item/index.tsx';
import { ItemsProps } from './types.ts';
import { Table, TableContainer } from './wrapper.tsx'

export const Items:ItemsProps = ({data, onClick}) => {
    return(
        <TableContainer>
            {data.map(label => {
                    return (
                        <Table onClick={onClick} key={label}>
                            <Item label={label} />
                        </Table>
                    )
                }
            )}
        </TableContainer>
    )
}