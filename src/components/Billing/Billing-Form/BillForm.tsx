import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack, TextField, Modal, Grid, Typography, Button, MenuItem, InputAdornment, Box, Container, Checkbox, FormGroup, FormControlLabel, IconButton, Paper, } from '@mui/material';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { Form } from './style';

const BillingForm = () => {
    const [categoryModal, setCategoryModal] = useState(false)
    const [unitModal, setUnitModal] = useState(false)



    const handleSubmit = () => {
    }

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" p={2}>
                <Typography id="modal-modal-title" variant="h6" component="h2"> Create a Bill</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Stack spacing={2}>

                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={2}>

                        </Stack>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="center" p={2}>
                    <Button size="medium" type="submit" variant="contained" disabled>
                        Save
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default BillingForm