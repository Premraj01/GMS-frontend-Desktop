import { Card, Table, TableBody, TableCell, Paper, TablePagination, TableRow, Typography, Popover, MenuItem, IconButton } from '@mui/material'
import { Fragment, useState } from 'react'
import { Product } from '../../../shared/model/product.model';
import Iconify from '../../../utils/components/iconify';
import { TABLE_HEAD, dummyProducts } from '../../../_mock/products';
import { applySortFilter } from './ProductFilterFunction';
import ProductHeaderList from './ProductsHeaderList';
import ProductsListToolbar from './ProductsListToolbar';

const ProductTable = () => {
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

    const filteredProducts = applySortFilter(dummyProducts, filterName);

    const isNotFound = !filteredProducts.length && !!filterName;

    return (

        <Fragment>
            <Card>
                <ProductsListToolbar filterName={filterName} onFilterName={handleFilterByName} />
                <Table>
                    <ProductHeaderList headLabel={TABLE_HEAD}
                    />
                    <TableBody>
                        {
                            filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product: Product) => {
                                return (
                                    <TableRow hover tabIndex={-1}>
                                        <TableCell>
                                            {product.id}
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" >
                                                {product.productName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product.productCode}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product.purchaseCost}
                                            </Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Typography >
                                                {product.saleCost}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product.GST}%
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product.location}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product.date}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product.stock}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography >
                                                {product?.manufacturingCompany?.name}
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
                    count={filteredProducts.length}
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
export default ProductTable