import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}));

const usesStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WheelSteals
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



function Header() {
  const classess = useStyles();
  const classes = usesStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <h5 className="text-left py-3 bg-danger">
      <Link to="/" class="text-light px-3">
        <span className="text-warning">Wheel</span>Steals
        <img width = "30" src="./imgs/icons/tire.png" alt="wheel" />
      </Link>

      <Link to="/cars" class="text-light px-3">
        Buy a Cars
      </Link>

      <Link to="/newuser" class="text-light px-3">
        New User ?
      </Link>

      <Link to="/about" class="text-light px-3">
        AboutUs
      </Link>

      
      <Link id="SignIn"class="text-light float-right px-3" onClick={handleOpen}>
      <img width = "30" src="./imgs/icons/icons8.png" alt="signin" />
        MyAccount
      </Link>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>


              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classess.paper}>
                <h2 id="title"><span className="text-warning">Wheel</span>Steals
                <img width = "30" src="./imgs/icons/tire.png" alt="wheel" />
                </h2>
                  <Typography component="h1" variant="h5">
                    Sign In
                  </Typography>
                  <form className={classess.form} noValidate>
                    <Grid 
                    container 
                    spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="fname"
                          name="UserName"
                          variant="outlined"
                          required
                          fullWidth
                          id="UserName"
                          label="User Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid>
                    </Grid>
                    <ThemeProvider theme={theme}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classess.submit}
                    >
                      Sign In
                    </Button>
                    </ThemeProvider>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2" to="/newuser" onClick={handleClose}>
                          Don`t have an account? Sign Up
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </Container>
            </div>
          </div>
        </Fade>
      </Modal>
    </h5>
  );
  
}


export default Header;
