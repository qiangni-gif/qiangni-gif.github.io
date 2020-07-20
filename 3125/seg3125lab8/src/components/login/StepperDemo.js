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



function getSteps(t) {
  return [t("stepper:intro"),t("stepper:Personal_Information"), t("stepper:Set_Perference"), t("stepper:Completed")];
}



function getStepContent(t,step,parentFunction) {
  switch (step) {
    case 0:
      return (
       <div> 
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <span className="text-warning">Wheel</span>{t("aboutus:about")}
              <br/>
              <br/>
              {t("stepper:Buying")}
              <br/>
              <br/>
              {t("stepper:followstep")}
          </Typography>
        </div>
        
        
      );
    case 1:
      return (
        <UserProfile t={t} functionCallFromParent={parentFunction.bind(this)} />
      );
    case 2:
      return (<SimpleSelect/>);
    case 3:
      return t("stepper:Congrats");
    default:
      return t("stepper:Unknown");
  }
}

export default function VerticalLinearStepper() {
  const [t, i18n] = useTranslation();


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(t);
  const [flag,setflag] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // get flag from UserProfile
  const  parentFunction =(data_from_child)=>{
    console.log("flag from UserProfile: "+ data_from_child);
    console.log("flag state: "+ flag);
    setflag(data_from_child);
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(t,index, parentFunction)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      variant="contained"
                      onClick={handleBack}
                      className={classes.button}
                    >
                      {t("stepper:Back")}
                    </Button>
                    <Button
                      disabled={!flag & activeStep === 1}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? t("stepper:Finish") : t("stepper:Next")}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>{t("stepper:Congratulation")}</Typography>
          <Button variant="contained" color="primary" onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </ThemeProvider>
    </div>
  );
}




class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Fname: ['',true],
      Lname: ['',true],
      uname: ['',true],
      email: ['',true],
      address: ['',true],
      Password: ['',true],
      phone: ['',true],
      flag: false,
    };
    
  }
  
  onChange(event){

    console.log(event.target.id)
    if(event.target.id === "First Name"){
      if (event.target.value.match("^[A-Za-z]{1,}[A-Za-z]{0,}$")) {
        this.setState({ Fname : ["", false]});
      } else {
        this.setState({ Fname : [this.props.t("stepper:Invalid_format"), true] });
      }
    }
    else if (event.target.id === "Last Name"){
      if (event.target.value.match("^[A-Za-z]{1,}[A-Za-z]{0,}$")) {
        this.setState({ Lname : ["", false]});
      } else {
        this.setState({ Lname : [this.props.t("stepper:Invalid_format"), true] });
      }
    }
    else if (event.target.id === "Email"){
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)) {
        this.setState({ email : ["", false]});
      } else {
        this.setState({ email : [this.props.t("stepper:Invalid_format_must_be"), true] });
      }
    }
    else if (event.target.id === "Password"){
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(event.target.value)) {
        this.setState({ Password : ["", false]});
      } else {
        this.setState({ Password : [this.props.t("stepper:Minimum_8_characters"), true] });
      }
    }
    else if (event.target.id === "Address"){
      if (event.target.value !== ""){
        this.setState({ address : ["", false]});
      }
      else {
        this.setState({ address : [this.props.t("stepper:please_fill_out"), true] });
      }
    }
    else if (event.target.id === "User Name"){
      if (event.target.value !== ""){
        this.setState({ uname : ["", false]});
      }
      else {
        this.setState({ uname : [this.props.t("stepper:please_fill_out"), true] });
      }
    }
    else {
      console.log(event.target.id)
    }
    
    if ((!this.state.Fname[1])&&(!this.state.Lname[1])&&(!this.state.uname[1])&&(!this.state.Password[1])&&(!this.state.address[1])&&(!this.state.email[1])){
      this.setState({flag : true})
    }else{
      this.setState({flag : false})
    }

    console.log(this.state.flag)
    //  send flag back to parent
    this.props.functionCallFromParent(this.state.flag);
  }

  
  


  render() {
    return (
      
        <form className={fromStyles.root} noValidate autoComplete="off">

          <div>
            <TextField 
            error={this.state.Fname[1]}
            onChange={this.onChange.bind(this)} 
            id="First Name" 
            label={this.props.t("stepper:First_Name")} 
            defaultValue="" 
            helperText={this.state.Fname[0]}
            variant="filled"/>

            <TextField
              error={this.state.Lname[1]}
              onChange={this.onChange.bind(this)}
              id="Last Name"
              label={this.props.t("stepper:Last_Name")} 
              defaultValue=""
              helperText={this.state.Lname[0]}
              variant="filled"
            />
          </div>
          <div>
            <PhoneInput
              id = "phone"
              country='ca'
              regions={['north-america', 'ottawa']}
            />
            <TextField
              error={this.state.email[1]}
              onChange={this.onChange.bind(this)}
              id="Email"
              label={this.props.t("stepper:Email_Address")} 
              defaultValue=""
              helperText={this.state.email[0]}
              variant="filled"
            />
          </div>
          <div>
            <TextField
              error={this.state.address[1]}
              onChange={this.onChange.bind(this)}
              id="Address"
              label={this.props.t("stepper:Address")} 
              defaultValue=""
              helperText={this.state.address[0]}
              variant="filled"
            />
            <TextField
              error={this.state.uname[1]}
              onChange={this.onChange.bind(this)}
              id="User Name"
              label={this.props.t("stepper:User_Name")} 
              defaultValue=""
              helperText={this.state.uname[0]}
              variant="filled"
            />
          </div>
          <div>
            <TextField
              error={this.state.Password[1]}
              onChange={this.onChange.bind(this)}
              id="Password"
              label={this.props.t("stepper:Password")} 
              defaultValue=""
              helperText={this.state.Password[0]}
              variant="filled"
            />
          </div>
        </form>
                     );
  }
}