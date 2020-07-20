import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';

function CarItem(props) {
  
  const [t, i18n] = useTranslation();
  return (
    <div className="col-md-12">
      <div
        className={
          props.eachCar.book_status
            ? "card mb-3 shadow bg-grey"
            : "card mb-3 shadow bg-light"
        }
      >
        <Grid container justify="flex-start" alignItems="stretch">
          <Grid item xs="6">
            <div className="card-body">
              <img
                src={"./imgs/cars/" + props.eachCar.image}
                alt={props.eachCar.image}
                className="card-img"
              />
            </div>
          </Grid>

          <Grid item xs="6">
            <div className="card-body">
              <p className="text-dark">
                <b>{props.eachCar.model}</b>
                <b> {props.eachCar.year}</b>
              </p>
              <p className="text-secondary">
                <span className="mr-4">
                  <img
                    src="./imgs/icons/brush.png"
                    alt="Brush"
                    className="icon_img op-6"
                  />{" "}
                  {props.eachCar.color}
                </span>
                <span className="">
                  <img
                    src="./imgs/icons/seater.png"
                    alt="Seat"
                    className="icon_img op-6"
                  />{" "}
                  {props.eachCar.seat_cap} {t("caritem:Seater")}
                </span>
              </p>
              <p className="text-secondary">
              {t("caritem:Price")}{" "}
                {props.eachCar.book_status ? (
                  <span className="text-secondary">
                    $. {props.eachCar.price}
                  </span>
                ) : (
                  <span className="text-primary">$. {props.eachCar.price}</span>
                )}
              </p>
              <div>
                {props.eachCar.book_status ? (
                  <Link to="/" className="btn btn-secondary disabled mr-2">
                    {t("caritem:Book_Now")}
                  </Link>
                ) : (
                  <Link
                    to="/booking"
                    className="btn btn-dark mr-2 book-btn"
                    onClick={() => props.bookCar(props.eachCar)}
                  >
                    {t("caritem:Book_Now")}
                  </Link>
                )}
                <Tooltip title={t("caritem:show engine and other info")}>
                <Link
                  to="/details"
                  className="btn btn-outline-dark details-btn"
                  onClick={() => props.showDetails(props.eachCar)}
                >
                  {t("caritem:Details")}
                </Link>
                </Tooltip>
              </div>
            </div>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showDetails: item => {
      dispatch({
        type: "SHOW_CAR",
        payload: { item }
      });
    },
    bookCar: item => {
      dispatch({
        type: "BOOK_CAR",
        payload: { item }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CarItem);
