import { Card, Table, TableBody, TableCell, Paper, TablePagination, TableRow, Typography, Popover, MenuItem, IconButton } from '@mui/material'
import { Fragment, useState } from 'react'
import Iconify from '../../../utils/components/iconify';
import { dummyCustomerData, TABLE_HEAD } from '../../../_mock/customer';
import { applySortFilter } from './CustomerFilterFunction';
import CustomerHeaderList from './CustomersHeaderList';
import CustomersListToolbar from './CustomersListToolbar';

const CustomerTable = () => {
    const [open, setOpen] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [filterName, setFilterName] = useState('');

    const handleOpenMenu = (event: any) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };
    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: any) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };
    const handleFilterByName = (event: any) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const filteredCustomers = applySortFilter(dummyCustomerData, filterName);

    const isNotFound = !filteredCustomers.length && !!filterName;

    return (

        <Fragment>
            <Card>
                <CustomersListToolbar filterName={filterName} onFilterName={handleFilterByName} />
                <Table>
                    <CustomerHeaderList headLabel={TABLE_HEAD}
                    />
                    <TableBody>
                        {
                            filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((cust: any) => {
                                return (
                                    <TableRow hover tabIndex={-1}>
                                        <TableCell>
                                            {cust.id}
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" >
                                                {cust.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {cust.conatctNumber}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {cust.address}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {cust.machine}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>

                                            <Typography >
                                                {cust.status ? 'Active' : 'Inactive'}
                                            </Typography>

                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {cust.credit_debit}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                                                <Iconify icon={'eva:more-vertical-fill'} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    {isNotFound && (
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                    <Paper
                                        sx={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography variant="h6" paragraph>
                                            Not found
                                        </Typography>

                                        <Typography variant="body2">
                                            No results found for &nbsp;
                                            <strong>&quot;{filterName}&quot;</strong>.
                                            <br /> Try checking for typos or using complete words.
                                        </Typography>
                                    </Paper>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredCustomers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 140,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <MenuItem>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Edit
                </MenuItem>

                <MenuItem sx={{ color: 'error.main' }}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                    Delete
                </MenuItem>
            </Popover>
        </Fragment>
    )
}
export default CustomerTable