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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c6ff00',
      main: '#d1ff33',
      dark: '#8ab200',
      contrastText: '#ffbb66',
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
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 150,
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



function Header(props) {

  const classess = useStyles();
  const classes = usesStyles();
  const [open, setOpen] = React.useState(false);
  const [lang,setlang] = React.useState('en');
  const handleOpen = () => {
    setOpen(true);
  };



  const handleClose = () => {
    setOpen(false);
  };

  const changelang = (event) =>{
    setlang(event.target.value);
    props.functionCallFromapp(event.target.value);
    console.log("lang " + lang)
    i18n.changeLanguage(event.target.value);
  }

  const [t, i18n] = useTranslation();

  return (
    <div>
    <h5 className="text-left py-3 bg-danger">
      <Link to="/" class="text-light px-3">
        <span className="text-warning">Wheel</span>Steals
        <img width = "30" src="./imgs/icons/tire.png" alt="wheel" />
      </Link>

      <Link to="/cars" class="text-light px-3">
        {t("header:buy_a_car")}
      </Link>

      <Link to="/newuser" class="text-light px-3">
        {t("header:new_user")}
      </Link>

      <Link to="/about" class="text-light px-3">
        {t("header:aboutus")}
      </Link>

      <ThemeProvider theme={theme}>
      <FormControl className={classes.formControl} >
        <InputLabel id="set_language" color="secondary" >{t("header:change_language")}</InputLabel>
          <Select
            labelId="set_language"
            id="set_languagea"
            value={lang}
            onChange={changelang}
            color="secondary"
            class = "text-white"
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>

      <Link id="SignIn"class="text-light float-right px-3" onClick={handleOpen}>
      <img width = "30" src="./imgs/icons/icons8.png" alt="signin" />
        {t("header:myaccount")}
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
                    {t("header:sign_in")}
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
                          label={t("header:l_username")}
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label={t("header:l_email")}
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
                          label={t("header:l_password")}
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label={t("header:l_promotion")}
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
                      {t("header:bt_sign_in")}
                    </Button>
                    </ThemeProvider>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2" to="/newuser" onClick={handleClose}>
                          {t("header:sign_up")}
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
    </div>
  );
  
}

// Header.propTypes = {
//   classes: PropTypes.object.isRequired
// };


export default Header;
