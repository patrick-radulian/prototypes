import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Header() {
    return (
        <Grid container item xs={12} style={{flex: 0}}>
            <Grid container item xs={3} sx={{background: "#00ADEE"}}>
                <Grid item justifyContent="center" alignItems="center">
                    <IconButton><MenuRoundedIcon/></IconButton>
                </Grid>
            </Grid>
            <Grid item xs={6} sx={{p: 1, background: "lightblue"}}>
                <TextField label="Search" size="small" InputProps={{endAdornment: (<InputAdornment position="start"><SearchRoundedIcon/></InputAdornment>)}} fullWidth/>
            </Grid>
            <Grid item xs={3} sx={{background: "#00ADEE"}}>
                <Grid item justifyContent="center" alignItems="center">
                    <IconButton><AccountCircleRoundedIcon/></IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;