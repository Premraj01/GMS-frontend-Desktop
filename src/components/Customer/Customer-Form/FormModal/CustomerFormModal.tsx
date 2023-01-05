import { Box, Link, Modal, Stack, Typography, Button, Container, Divider, Paper } from "@mui/material"
import Iconify from '../../../../utils/components/iconify'
import AddCustomerForm from "./AddCustomerForm"
import { Form, StyledContent, StyledRoot } from './style'


interface Props {
    isOpen: boolean,
    isClose: any
}

const FormModel = ({ isOpen, isClose }: Props) => {
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

                        <AddCustomerForm />
                    </Container>
                </Box>
            </Paper>
        </Modal >
    )
}

export default FormModel