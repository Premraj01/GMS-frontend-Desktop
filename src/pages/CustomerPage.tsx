
import { Stack, Typography, Button } from '@mui/material'
import Iconify from '../utils/components/iconify'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import CustomerFormModal from '../components/Customer/Customer-Form/FormModal/CustomerFormModal'
import CustomerTable from '../components/Customer/CustomersList/CustomersList'

const CustomerPage = () => {

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
                <title> GMS | Customer </title>
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
                <CustomerFormModal isOpen={formModel} isClose={closeFormModal} />
                <CustomerTable />
            </>
        </>

    )
}

export default CustomerPage