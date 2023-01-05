
import { LoadingButton } from '@mui/lab';
import { Stack, TextField, Grid, Typography, Button, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { Customer } from '../../../../shared/model/customer.model';
import { customerFormError } from '../ErrorForm';


const LoginForm = () => {
    const [customer, setCustomer] = useState<Partial<Customer>>({});

    const isError = (customer: Partial<Customer>) => {
        return customerFormError(customer)
    }

    const handleSubmit = () => {
        console.log('customer', customer.name, customer.communication, customer.address, customer.machine);
    }

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" p={2}>
                <Typography id="modal-modal-title" variant="h6" component="h2"> Add a Customer</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <TextField required
                                id="name"
                                size='small'
                                label="Full Name"
                                name='name'
                                value={customer?.name}
                                onChange={e => setCustomer({ ...customer, name: e.target.value })}
                                error={customer?.name === ''}
                                helperText={customer.name === "" ? "Name is required!" : " "}
                            />


                            <TextField
                                name="line1"
                                label="Address"
                                size='small'
                                multiline
                                maxRows={4}
                                required
                                value={customer?.address?.line1}
                                onChange={e => setCustomer({
                                    ...customer, address: {
                                        ...customer?.address!, line1: e.target.value
                                    }
                                }
                                )}
                                error={customer?.address?.line1 === ''}
                                helperText={customer.address?.line1 === "" ? "Address is required!" : " "}
                            />
                            <TextField
                                name="village"
                                label="village"
                                size='small'
                                value={customer?.address?.village}
                                onChange={e => setCustomer({
                                    ...customer, address: {
                                        ...customer?.address!, village: e.target.value
                                    }
                                }
                                )}
                                error={customer?.address?.village === ''}
                                helperText={customer.address?.village === "" ? "Village is required!" : " "}
                                required
                            />
                            <TextField
                                name="district"
                                label="District"
                                size='small'
                                value={customer?.address?.district}
                                onChange={e => setCustomer({
                                    ...customer, address: {
                                        ...customer?.address!, district: e.target.value
                                    }
                                }
                                )}
                                error={customer?.address?.district === ''}
                                helperText={customer.address?.district === "" ? "District is required!" : " "}
                                required
                            />
                            <TextField
                                name="pinCode"
                                label="Pin Code"
                                size='small'
                                value={customer?.address?.pinCode}
                                onChange={e => setCustomer({
                                    ...customer, address: {
                                        ...customer?.address!, pinCode: e.target.value
                                    }
                                }
                                )}
                                error={customer?.address?.pinCode === ''}
                                helperText={customer.address?.pinCode === "" ? "Pin code is required!" : " "}
                                required
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <TextField
                                name="contactNumber"
                                label="Contact Number"
                                size='small'
                                value={customer?.communication?.contactNumber}
                                onChange={e => setCustomer({
                                    ...customer, communication: {
                                        ...customer?.communication!, contactNumber: e.target.value
                                    }
                                }
                                )}
                                error={customer?.communication?.contactNumber === ''}
                                helperText={customer.communication?.contactNumber === "" ? "Contact number is required!" : " "}
                                required

                            />

                            <TextField
                                name="email"
                                type='email'
                                label="Email"
                                size='small'
                                value={customer?.communication?.email}
                                onChange={e => setCustomer({
                                    ...customer, communication: {
                                        ...customer?.communication!, email: e.target.value
                                    }
                                }
                                )}
                                helperText=""

                            />
                            <TextField
                                name="machine-name"
                                label="Machine Name"
                                size='small'
                                value={customer?.machine?.name}
                                onChange={e => setCustomer({
                                    ...customer, machine: {
                                        ...customer?.machine!, name: e.target.value
                                    }
                                }
                                )}

                                helperText=""
                            />

                            <TextField
                                name="machine-year"
                                label="Machine Year"
                                size='small'

                                value={customer?.machine?.year}
                                onChange={e => setCustomer({
                                    ...customer, machine: {
                                        ...customer?.machine!, year: e.target.value
                                    }
                                }
                                )}

                                helperText=""
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="center" p={2}>
                    <Button size="medium" type="submit" variant="contained" disabled={
                        isError(customer)
                    }>
                        Save
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default LoginForm