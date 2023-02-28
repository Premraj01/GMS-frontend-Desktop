import { Button, Stack, Typography } from '@mui/material'
import Iconify from '../utils/components/iconify'
import { Helmet } from 'react-helmet-async'
import BillsTable from '../components/Billing/BillsList/BillsList'
import BillFormModel from '../components/Billing/Billing-Form/BillFormModel'
import { useState } from 'react'

const BillingPage = () => {
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
                <title> GMS | Billing </title>
            </Helmet>
            <>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Billing
                    </Typography>
                    <Stack direction="row" spacing={4} justifyContent="space-between" mb={5}>
                        <Button slot='end' variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}
                            onClick={openFormModal} >
                            Create a Bill
                        </Button>
                        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                            Estimate
                        </Button>
                    </Stack>
                </Stack>
                <BillFormModel isOpen={formModel} isClose={closeFormModal} />
                <BillsTable />

            </>
        </>
    )
}

export default BillingPage