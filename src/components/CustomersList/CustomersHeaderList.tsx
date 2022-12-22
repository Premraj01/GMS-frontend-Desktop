import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import PropTypes from 'prop-types';

interface UserListHead {
    headLabel: any[];
};


const CustomerHeaderList = ({
    headLabel,
}: UserListHead) => {
    return (
        <TableHead>
            <TableRow>

                {headLabel.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.alignRight ? 'right' : 'left'}
                    >
                        <TableSortLabel>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default CustomerHeaderList