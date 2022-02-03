import { Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const CssTextField = styled(TextField)({
    'label': {
        color: "white"
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        color: "white",
        padding: 0,
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
          borderWidth: 1
        },
    },
});

const SearchAdornment = () => {
    return (
        <InputAdornment position="start" sx={{m: 0, borderTopRightRadius: 4, borderBottomRightRadius: 4}}>
            <Box display="flex" alignItems="center" sx={{background: "white", borderTopRightRadius: 4, borderBottomRightRadius: 4, paddingX: 2}}>
                <IconButton><SearchRoundedIcon sx={{color: "#00ADEE"}}/></IconButton>
            </Box>
        </InputAdornment>
    )
}

function Header() {
    return (
        <Grid container item xs={12} sx={{background: "#00ADEE"}} flex={0}>
            <Grid container item xs={5}>
                <Grid item display="flex" alignItems="center">
                    <IconButton sx={{m: 1, color: "white"}}><MenuRoundedIcon/></IconButton>
                </Grid>
                <Grid item display="flex" alignItems="center">
                    <Grid container display="flex" alignItems="center">
                        <Grid item>
                            <BeachAccessIcon sx={{color: "white", transform: "scale(-1.25, 1.25) rotateZ(15deg)"}}/>
                        </Grid>
                        <Grid item pl={0.5}>
                            <Typography color="white" fontSize={16} lineHeight={1}>PoolParty</Typography>
                            <Typography color="white" fontSize={10} lineHeight={1} textAlign="end">Integrator</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="white" fontSize={36} pl={0.5}>8.2</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} p={1}>
                <CssTextField label="Search" size="small" sx={{borderColor: "white", background: "#FFFFFF33"}} InputProps={{endAdornment: (<SearchAdornment/>)}} fullWidth/>
            </Grid>
            <Grid item xs={5}>
                <Grid item display="flex" justifyContent="flex-end" alignItems="center">
                    <IconButton sx={{m: 1, color: "white"}}><AccountCircleRoundedIcon/></IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;