import { Card, Table, TableBody, TableCell, Paper, TablePagination, TableRow, Typography, Popover, MenuItem, IconButton } from '@mui/material'

import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { TABLE_HEAD } from '../../../shared/TableHeaders/Customer'
import Iconify from '../../../utils/components/iconify/Iconify'
import { dummyCustomerData, } from '../../../_mock/customer'
import { applySortFilter } from './BillsFilterFunction'
import BillsHeaderList from './BillsHeaderList'
import BillsListToolbar from './BillsListToolbar'

const BillsList = () => {
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

    const filteredBills = applySortFilter(dummyCustomerData, filterName);

    const isNotFound = !filteredBills.length && !!filterName;
    return (
        <Fragment>
            <Card>
                <BillsListToolbar filterName={filterName} onFilterName={handleFilterByName} />
                <Table>
                    <BillsHeaderList headLabel={TABLE_HEAD}
                    />
                    <TableBody>
                        {
                            filteredBills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((cust: any) => {
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

                </Table>
            </Card>
        </Fragment>
    )
}
export default BillsList
