import { CssBaseline, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function App() {
    return (
        <CssBaseline>
            <Grid container>
                <Grid container item xs={12}>
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
                <Grid item xs={12}>Row B</Grid>
            </Grid>
        </CssBaseline>
    );
}

export default App;
