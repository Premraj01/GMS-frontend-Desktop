// @mui
import { styled, alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
// component
import Iconify from '../../../utils/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }: any) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }: any) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
        width: 320,
        boxShadow: theme.customShadows.z8,
    },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
}));

// ----------------------------------------------------------------------

interface ProductListToolbar {
    // numSelected: number,
    filterName: string,
    onFilterName: any,
};

const ProductsListToolbar = ({ filterName, onFilterName }: ProductListToolbar) => {
    return (
        <StyledRoot
        >

            <StyledSearch
                value={filterName}
                onChange={onFilterName}
                placeholder="Search product..."
                startAdornment={
                    <InputAdornment position="start">
                        <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                    </InputAdornment>
                }
            />

            <Tooltip title="Filter list">
                <IconButton>
                    <Iconify icon="ic:round-filter-list" />
                </IconButton>
            </Tooltip>

        </StyledRoot>
    );
}

export default ProductsListToolbar