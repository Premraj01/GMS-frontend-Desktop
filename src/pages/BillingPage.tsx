import { Button, Stack, Typography } from '@mui/material'
import Iconify from '../utils/components/iconify'
import { Helmet } from 'react-helmet-async'

const BillingPage = () => {
    return (
        <>
            <Helmet>
                <title> GMS | Customer </title>
            </Helmet>
            <>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Billing
                    </Typography>
                    <Stack direction="row" spacing={4} justifyContent="space-between" mb={5}>
                        <Button slot='end' variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                            Create a Bill
                        </Button>
                        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                            Estimate
                        </Button>
                    </Stack>
                </Stack>

            </>
        </>
    )
}

export default BillingPage