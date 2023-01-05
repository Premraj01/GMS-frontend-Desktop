import Iconify from '../utils/components/iconify'
import { Stack, Typography, Button } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const ProductPage = () => {
    const [formModel, setFormModel] = useState(false)

    const openFormModal = () => {
        setFormModel(true)
    }

    const closeFormModal = () => {
        setFormModel(false)
    }
    return (
        <>
            <Helmet>
                <title> GMS | Product </title>
            </Helmet>
            <>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Customer
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}
                        onClick={openFormModal}
                    >
                        New Customer
                    </Button>
                </Stack>
                {/* <FormModal isOpen={formModel} isClose={closeFormModal} /> */}
            </>

        </>
    )
}

export default ProductPage