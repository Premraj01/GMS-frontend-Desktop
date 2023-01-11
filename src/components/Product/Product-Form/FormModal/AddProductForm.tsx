import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack, TextField, Modal, Grid, Typography, Button, MenuItem, InputAdornment, Box, Container, Checkbox, FormGroup, FormControlLabel, IconButton, Paper, } from '@mui/material';
import { useState } from 'react';
import { Product } from '../../../../shared/model/product.model';
import { productFormError } from '../ProductFormError';
import Iconify from '../../../../utils/components/iconify';
import { Dayjs } from 'dayjs';
import { Form } from './style';


const AddProductForm = () => {
    const [product, setProduct] = useState<Partial<Product>>({});
    const [value, setValue] = useState<Dayjs | null>(null);
    const [categoryModal, setCategoryModal] = useState(false)
    const [unitModal, setUnitModal] = useState(false)

    const isError = (product: Partial<Product>) => {
        return productFormError(product)
    }

    const handleSubmit = () => {
        console.log('customer', product);
    }

    const categories = [
        {
            value: 'regular',
            label: 'Regular',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    const units = [
        {
            value: 'NUG',
            label: 'Nug'
        },
        {
            value: 'KG',
            label: 'Kg'
        },
        {
            value: 'ltr',
            label: 'Liter'
        },

    ]

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" p={2}>
                <Typography id="modal-modal-title" variant="h6" component="h2"> Add a Product</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Stack spacing={2}>

                            <Grid container  >
                                <Grid item xs={10}>
                                    <TextField
                                        fullWidth
                                        id="category"
                                        size='small'
                                        select
                                        label="Category"
                                        defaultValue="regular"
                                    >
                                        {categories.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => setCategoryModal(true)}>
                                        <Iconify icon="ic:add" />
                                    </IconButton>
                                </Grid>
                                <Modal open={categoryModal}>
                                    <Paper>
                                        <Box sx={Form}>
                                            <Stack alignItems='flex-end'>
                                                <Iconify icon="ri:close-circle-line" onClick={() => setCategoryModal(false)} />
                                            </Stack>
                                            <Container maxWidth="sm">

                                                <form>
                                                    <Stack spacing={2}>
                                                        <TextField required
                                                            id="add-category"
                                                            size='small'
                                                            label="Add Category"
                                                            name='add-category'
                                                        />

                                                        <Button size="medium" type="button" variant="contained" >
                                                            Add
                                                        </Button>
                                                    </Stack>
                                                </form>
                                            </Container>
                                        </Box>
                                    </Paper>
                                </Modal>
                            </Grid>

                            <TextField required
                                id="product-name"
                                size='small'
                                label="Product Name"
                                name='product-name'
                                value={product?.productName}
                                onChange={e => setProduct({ ...product, productName: e.target.value })}
                                error={product?.productName === ''}
                                helperText={product?.productName === "" ? "Name is required!" : ""}
                            />
                            <TextField required
                                id="product-code"
                                size='small'
                                label="Product Code"
                                name='product-code'
                                value={product?.productCode}
                                onChange={e => setProduct({ ...product, productCode: e.target.value })}
                                error={product?.productCode === ''}
                                helperText={product?.productCode === "" ? "Code is required!" : ""}
                            />
                            <TextField required
                                id="purchase-cost"
                                size='small'
                                type='number'
                                label="Purchase Cost"
                                name='cost'
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                value={product?.productCost}
                                onChange={(e: any) => setProduct({ ...product, productCost: e.target.value })}
                                error={product.productCost! <= 0}
                                helperText={product.productCost! <= 0 ? "Cost cannot be zero!" : ""}
                            />


                            <TextField
                                id="sale-cost"
                                name="sale-cost"
                                label="Sale Cost"
                                size='small'
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                maxRows={4}
                                required
                                value={product?.saleCost}
                                onChange={(e: any) => setProduct({ ...product, saleCost: e.target.value })}
                                error={product.saleCost! <= 0}
                                helperText={product.saleCost! <= 0 ? "Sale cost cannot be zero!" : ""}
                            />
                            <TextField
                                id="gst"
                                name="gst"
                                type="number"
                                label="GST"
                                size='small'
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={product?.GST}
                                onChange={(e: any) => setProduct({ ...product, GST: e.target.value })}
                                error={product.GST! <= 0}
                                helperText={product.GST! <= 0 ? "GST cannot be zero!" : ""}
                                required
                            />
                            <Grid container  >
                                <Grid item xs={10}>
                                    <TextField
                                        id="unit"
                                        size='small'
                                        select
                                        label="Unit"
                                        defaultValue="NUG"
                                        fullWidth
                                    >
                                        {units.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => setUnitModal(true)}>
                                        <Iconify icon="ic:add" />
                                    </IconButton>
                                </Grid>
                                <Modal open={unitModal}>
                                    <Paper>
                                        <Box sx={Form}>
                                            <Stack alignItems='flex-end'>
                                                <Iconify icon="ri:close-circle-line" onClick={() => setUnitModal(false)} />
                                            </Stack>
                                            <Container maxWidth="sm">

                                                <form>
                                                    <Stack spacing={2}>
                                                        <TextField required
                                                            id="add-unit"
                                                            size='small'
                                                            label="Add Unit"
                                                            name='add-unit'
                                                        />

                                                        <Button size="medium" type="button" variant="contained" >
                                                            Add
                                                        </Button>
                                                    </Stack>
                                                </form>
                                            </Container>
                                        </Box>
                                    </Paper>
                                </Modal>
                            </Grid>

                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            {/* <TextField
                                type="date"
                                name="date"
                                label="Date"
                                size='small'
                                // value={customer?.communication?.contactNumber}
                                // onChange={e => setCustomer({
                                //     ...customer, communication: {
                                //         ...customer?.communication!, contactNumber: e.target.value
                                //     }
                                // }
                                // )}
                                // error={customer?.communication?.contactNumber === ''}
                                // helperText={customer.communication?.contactNumber === "" ? "Contact number is required!" : " "}
                                required

                            /> */}
                            <TextField
                                id='stock'
                                name="stock"
                                label="Stock"
                                size='small'
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                value={product?.stock}
                                onChange={(e: any) => setProduct({ ...product, stock: e.target.value })}
                                error={product.stock! <= 0}
                                helperText={product.stock! <= 0 ? "Stock cannot be zero!" : ""}

                                required
                            />
                            <TextField
                                id='min-stock'
                                name="min-stock"
                                label="Minimum Stock"
                                size='small'
                                value={product?.minimumStock}
                                onChange={(e: any) => setProduct({
                                    ...product, minimumStock: e.target.value
                                }
                                )}


                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date"
                                    inputFormat='DD/MM/YYYY'

                                    value={product.date}
                                    onChange={(date: any) => setProduct({ ...product, date: date })
                                    }
                                    renderInput={(params) => <TextField size='small' {...params} />}
                                />
                            </LocalizationProvider>

                            <TextField
                                name="location"
                                type='text'
                                label="Location"
                                size='small'
                                value={product?.location}
                                onChange={(e: any) => setProduct({
                                    ...product, location: e.target.value
                                }
                                )}
                            />
                            <TextField
                                name="company"
                                type='text'
                                label="Company"
                                size='small'
                                value={product?.manufacturingCompany?.name}
                                onChange={e => setProduct({
                                    ...product, manufacturingCompany: {
                                        ...product?.manufacturingCompany!, name: e.target.value
                                    }
                                }
                                )}

                            />

                            <FormGroup>
                                <FormControlLabel value={product?.status}
                                    onChange={(e: any) => setProduct({
                                        ...product, status: e.target.value
                                    }
                                    )} control={<Checkbox defaultChecked />} label="Active" />

                            </FormGroup>


                        </Stack>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="center" p={2}>
                    <Button size="medium" type="submit" variant="contained" disabled={
                        isError(product)
                    }>
                        Save
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default AddProductForm