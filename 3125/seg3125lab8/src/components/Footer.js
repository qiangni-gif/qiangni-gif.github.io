import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <div className="container footer border-top pt-3">
      <div class="card bg-transparent text-white">
          <img class="card-img" src="./imgs/WEB.jpg" alt="WEB"/>
          <div class="card-img-overlay ">
            <div>

              <h5 className="text-dark">WheelSteals
              <img width = "30" src="./imgs/icons/tire.png" alt="wheel" />
              </h5>
              <p className="text-secondary pt-3 pb-2">WheelSteals Pvt. Ltd.</p>
              <p className="text-secondary">
                75, Laurier Ave E, Ottawa
              </p>
              <p className="text-secondary mb-4">ON, K1N 6N5</p>
              <div className="socialIcons mb-5">
                <img src="./imgs/icons/twitter.png" alt="Twitter" />
                <img src="./imgs/icons/instagram.png" alt="Instagram" />
                <img src="./imgs/icons/linkedin.png" alt="LinkedIn" />
              </div>

              <div className="d-flex justify-content-between flex-column flex-sm-row mb-2">

                <div className="mb-4">
                  <Link to="/" className="text-secondary mr-4">
                    {t("footer:home")}
                  </Link>
                  <Link to="/about" className="text-secondary mr-4">
                    {t("footer:about")}
                  </Link>
                  <Link to="/page404" className="text-secondary mr-4">
                    {t("footer:contact")}
                  </Link>
                </div>
                
                <div className="mb-4">
                  <Link to="/page404" className="text-secondary mr-4">
                    {t("footer:privacy_policy")}
                  </Link>
                  <Link to="/page404" className="text-secondary">
                    {t("footer:terms_of_service")}
                  </Link>
                </div>

              </div>

            </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
