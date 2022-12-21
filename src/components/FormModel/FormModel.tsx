import { Box, Link, Modal, Stack, Typography, Button, Container, Divider } from "@mui/material"
import Iconify from '../../utils/components/iconify'
import './FormModel.css'
import LoginForm from "./LoginForm"
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
            hideBackdrop={true}

            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={Form}>
                <Stack alignItems='flex-end'>
                    <Iconify icon="ri:close-circle-line" onClick={handleClose} />
                </Stack>
                <Container maxWidth="sm">

                    <Typography alignItems="center" variant="h4" gutterBottom>
                        Add a Customer
                    </Typography>

                    <LoginForm />
                </Container>
            </Box>
        </Modal >
    )
}

export default FormModel