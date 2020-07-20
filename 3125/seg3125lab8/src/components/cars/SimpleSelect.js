import React from 'react';
import { makeStyles, ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const sliderStyles = makeStyles({
    root: {
      width: "auto",
    },
  });
  
function valuetext(value) {
    return `$${value}`;
}

export default function SimpleSelect() {
  
  const [t, i18n] = useTranslation();
  const classes = useStyles();
  const [seat, setseat] = React.useState('');
  const [color, setcolor] = React.useState('');
  const [style, setstyle] = React.useState('');
  const slclasses = sliderStyles();
  const [price, setprice] = React.useState([3000, 30000]);

  

  const handleChange = (event) => {
    setseat(event.target.value);
  };

  const handleChangecolor = (event) => {
    setcolor(event.target.value);
  };

  const handleChangestyle = (event) => {
    setstyle(event.target.value);
  };

  const handleChangeprice = (event, newValue) => {
    setprice(newValue);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={2}
        >

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" ></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={seat}
                onChange={handleChange}
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
              <FormHelperText>{t("simple:Number_of_Seats")}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" ></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                onChange={handleChangecolor}
                
              >
                <MenuItem value={"red"}>{t("simple:red")}</MenuItem>
                <MenuItem value={"blue"}>{t("simple:blue")}</MenuItem>
                <MenuItem value={"yellow"}>{t("simple:yellow")}</MenuItem>
                <MenuItem value={"black"}>{t("simple:black")}</MenuItem>
                <MenuItem value={"green"}>{t("simple:green")}</MenuItem>
              </Select>
              <FormHelperText>{t("simple:choose_a_color")}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" ></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={style}
                onChange={handleChangestyle}
                
              >
                <MenuItem value={"sedan"}>sedan</MenuItem>
                <MenuItem value={"Coupé"}>Coupé</MenuItem>
                <MenuItem value={"SUV"}>SUV</MenuItem>
                <MenuItem value={"Convertible"}>Convertible</MenuItem>
                <MenuItem value={"Hatchback"}>Hatchback</MenuItem>
                <MenuItem value={"Truck"}>Truck</MenuItem>
                <MenuItem value={"van"}>van</MenuItem>
                <MenuItem value={"minivan"}>minivan</MenuItem>
              </Select>
              <FormHelperText>{t("simple:choose_a_style")}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <div className={slclasses.root}>
              <Typography id="range-slider" gutterBottom>
              {t("simple:price_range")}
              </Typography>
              <Slider
                  value={price}
                  onChange={handleChangeprice}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                  min={2000}
                  max={59999}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color = "primary">{t("simple:update_filter")}</Button>
          </Grid>

        </Grid>
      </ThemeProvider>
    </div>
  );
}