import React from 'react'
import { Box, Link, Modal, Stack, Typography, Button, Container, Divider, Paper } from "@mui/material"
import Iconify from '../../../utils/components/iconify'
import { Form, StyledContent, StyledRoot } from './style'
import BillingForm from './BillForm'

interface Props {
    isOpen: boolean,
    isClose: any
}

const BillFormModel = ({ isOpen, isClose }: Props) => {
    const handleClose = () => {
        isClose()
    }
    return (
        <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper>
                <Box sx={Form}>
                    <Stack alignItems='flex-end'>
                        <Iconify icon="ri:close-circle-line" onClick={handleClose} />
                    </Stack>
                    <Container maxWidth="sm">

                        {/* <Typography alignItems="center" variant="h4" gutterBottom>
                Add a Customer
            </Typography> */}

                        <BillingForm />
                    </Container>
                </Box>
            </Paper>
        </Modal >
    )
}

export default BillFormModel