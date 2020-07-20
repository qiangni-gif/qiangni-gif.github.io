import React, { Component } from 'react';
import CarItem from './CarItem';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SimpleSelect from "./SimpleSelect";
import { withTranslation } from 'react-i18next';




const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
		margin: theme.spacing(1),
		width: '30ch',
		},
		formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		},
		selectEmpty: {
		marginTop: theme.spacing(2),
		},
	},
}));





class Cars extends Component {

	

	render() {
		const { t } = this.props;
		return (
			<div className="container pt-5">
				<h4>{t("car:Cars_For_Sale")}</h4>
				<hr/>
				<div>
					<Grid
					container
					spacing={2}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					>
						<Grid item xs>
							<div class = "card mb-3 shadow bg-light">
								<form className={useStyles.root} noValidate autoComplete="off">
									<TextField id="standard-basic" label={t("car:Search")} fullWidth />
								</form>
								<SimpleSelect/>
							</div>
						</Grid>

						<Grid item xs={9}>
							<Grid container direction="column" justify="flex-start" alignItems="stretch">
							<Grid item xs>
							<div>
								{this.props.carsArray.map(eachCar=>{
									return (
										<CarItem key={eachCar.id} eachCar={eachCar} />
									)
								})}
							
							</div>
							</Grid>
							</Grid>
						</Grid>

					</Grid>
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => {
	return { carsArray: [...state.cars] }
}



export default connect(mapStateToProps, null)(withTranslation()(Cars));