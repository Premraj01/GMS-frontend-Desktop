import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, TextField, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../utils/components/iconify';

const LoginForm = () => {
    return (
        <>
            <Stack spacing={3} pb={2}>
                <TextField name="fname" label="First name" size='small' />
                <TextField
                    name="lname"
                    label="Last Name"
                    size='small'

                />
                <TextField
                    name="lname"
                    label="Last Name"
                    size='small'

                />
                <TextField
                    name="lname"
                    label="Last Name"
                    size='small'

                />
                <TextField
                    name="lname"
                    label="Last Name"
                    size='small'

                />
            </Stack>
            <LoadingButton fullWidth size="medium" type="submit" variant="contained" >
                Add
            </LoadingButton>
        </>
    )
}

export default LoginForm