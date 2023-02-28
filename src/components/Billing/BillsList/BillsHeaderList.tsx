import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'

interface BillsListHead {
    headLabel: any[];
};


const BillsHeaderList = ({
    headLabel,
}: BillsListHead) => {
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

export default BillsHeaderList