import { Button, Container } from '@mui/material'
import { Stack, Typography } from '@mui/material'
import Iconify from '../utils/components/iconify'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import FormModal from '../components/Customer-Form/FormModal/FormModal'
import CustomerTable from '../components/CustomersList/CustomersList'

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
            <Container>
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
                <FormModal isOpen={formModel} isClose={closeFormModal} />
                <CustomerTable />
            </Container>
        </>

    )
}

export default CustomerPage