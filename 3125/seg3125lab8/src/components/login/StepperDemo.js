import React from 'react';
import { makeStyles, ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import SimpleSelect from "../cars/SimpleSelect";

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
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  }
}));

const fromStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  }
}));



function getSteps() {
  return ['Personal Information', 'Set Perference', 'Completed !'];
}



function getStepContent(step) {
  const classess = fromStyles();
  
  
  switch (step) {
    case 0:
      return (
        <form className={classess.root} noValidate autoComplete="off">
          <div>
            <TextField error id="standard-error" label="First Name" defaultValue="" variant="filled"/>
            <TextField
              error
              id="standard-error-helper-text"
              label="Last Name"
              defaultValue=""
              variant="filled"
            />
          </div>
          <div>
            <PhoneInput
              country='ca'
              regions={['north-america', 'ottawa']}
            />
            <TextField
              error
              id="filled-error-helper-text"
              label="Email"
              defaultValue=""
              helperText=""
              variant="filled"
            />
          </div>
          <div>
            <TextField
              error
              id="outlined-error-helper-text"
              label="Address"
              defaultValue=""
              variant="filled"
            />
            <TextField
              error
              id="outlined-error-helper-text"
              label="User Name"
              defaultValue=""
              helperText=""
              variant="filled"
            />
          </div>
          <div>
            <TextField
              error
              id="outlined-error-helper-text"
              label="Pass word"
              defaultValue=""
              variant="filled"
            />
          </div>
        </form>
      );
    case 1:
      return (<SimpleSelect/>);
    case 2:
      return `You’ve worked so hard for this. Congrats!”`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      variant="contained"
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Congratulation !!!, All steps completed</Typography>
          <Button variant="contained" color="primary" onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </ThemeProvider>
    </div>
  );
}