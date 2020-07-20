import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withTranslation } from 'react-i18next';


class ShowDetails extends Component {

	formatDate = date => {
		const yy = Number(date.substr(0,4)); const mm = Number(date.substr(5,2)); const dd = Number(date.substr(8,2));
		switch(mm){
			case 1: return `${dd} Jan ${yy}`;
			case 2: return `${dd} Feb ${yy}`;
			case 3: return `${dd} Mar ${yy}`;
			case 4: return `${dd} Apr ${yy}`;
			case 5: return `${dd} May ${yy}`;
			case 6: return `${dd} Jun ${yy}`;
			case 7: return `${dd} Jul ${yy}`;
			case 8: return `${dd} Aug ${yy}`;
			case 9: return `${dd} Sep ${yy}`;
			case 10: return `${dd} Oct ${yy}`;
			case 11: return `${dd} Nov ${yy}`;
			case 12: return `${dd} Dec ${yy}`;
			default:
		}
	}

	
	render() {
		const { t } = this.props;

		if(Object.keys(this.props.eachCar).length===0){
			return null;
		}

		return (
			<div className="container mt-5">
				<div className="row no-gutters shadow-sm border rounded overflow-hidden" id="show_details_top">
					<div className="col-md-7">
					<img src={"./imgs/cars/" + this.props.eachCar.image} alt={this.props.eachCar.image} className="card-img rounded-0"/></div>
					<div className="col-md-5 d-flex align-items-center bg-change">
						<div className="card rounded-0 border-0 p-4 bg-light shadow-lg">
							<div className="card-body">
								<h4 className="text-dark">{this.props.eachCar.model} {this.props.eachCar.year}</h4>
								<p className="text-secondary">
									<span className="mr-4"><img src="./imgs/icons/brush.png" alt="Brush" className="icon_img op-6"/> {this.props.eachCar.color}</span>
									<span className=""><img src="./imgs/icons/seater.png" alt="Seat" className="icon_img op-6"/> {this.props.eachCar.seat_cap} {t("showdetail:Seater")}</span>
								</p>
								<p className="text-secondary">{t("showdetail:Price")} <span className="text-primary">$. {this.props.eachCar.price}</span></p>
								<div>
									{this.props.eachCar.book_status?<a href="#!" className="btn btn-secondary btn-block disabled mr-2">{t("showdetail:Book_Now")}</a>:<Link to="/booking" className="btn btn-dark btn-block shadow mr-2" onClick={()=>this.props.bookCar(this.props.eachCar)}>{t("showdetail:Book_Now")}</Link>}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-12">
						<h4>{t("showdetail:Car_Details")}</h4>
						<hr/>
						{this.props.eachCar.book_status ? <h5><span className="badge badge-danger">{t("showdetail:Not_Available")}</span></h5> : <h5><span className="badge badge-success">{t("showdetail:Available")}</span></h5>}
						
						<p className="text-secondary">{t("showdetail:Vehicle_No")} {this.props.eachCar.veh_no}</p>
						<p className="text-secondary">{t("showdetail:Type")} {this.props.eachCar.description.type}</p>
						<p className="text-secondary">{t("showdetail:Engine")} {this.props.eachCar.description.engine}</p>
						<p className="text-secondary">{this.props.eachCar.description.content}</p>
					</div>
				</div>
				<div>
					{this.props.eachCar.book_status ?
						(
							<div className="row mt-5">
								<div className="col-12">
									<h4>{t("showdetail:Current_Booking")}</h4>
									<hr/>
									<div className="table-responsive-sm">
										<table className="table table-striped">
											<thead>
												<tr>
													<th>{t("showdetail:Name")}</th>
													<th>{t("showdetail:Phone_No")}</th>
													<th>{t("showdetail:Issue_Date")}</th>
													<th>{t("showdetail:Return_Date")}</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>{this.props.eachCar.userDetails.name}</td>
													<td>{this.props.eachCar.userDetails.phoneNo}</td>
													<td>{this.formatDate(this.props.eachCar.userDetails.issueDate)}</td>
													<td>{this.formatDate(this.props.eachCar.userDetails.returnDate)}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						) : null
					}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {eachCar: {...state.show_car}}
}

const mapDispatchToProps = dispatch => {
	return {
		bookCar: item => { 
			dispatch({
				type: "BOOK_CAR",
				payload:{item}
			})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ShowDetails));
