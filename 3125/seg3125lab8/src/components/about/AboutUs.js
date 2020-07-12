import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                <span className="text-warning">Wheel</span>Steals
                <img width = "50" src="./imgs/icons/tire.png" alt="wheel" />
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                <span className="text-warning">Wheel</span>Steals is a constantly growing car shopping brand,
                which has as priority to provide quality services at affordable rates
                and flexible terms and conditions, combined with real 24 hours support. 
                This had established us as one of the most competitive company in the market.
            </Typography>
            
          </Container>
        </div>

      </main>

    </React.Fragment>
  );
}