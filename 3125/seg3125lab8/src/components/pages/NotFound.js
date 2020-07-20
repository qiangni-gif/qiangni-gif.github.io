import React from "react";
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const [t, i18n] = useTranslation();
  return (
    <div className="container">
      <div className="h-200 d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-2 font-weight-bold">{t("notfound:Error")}</h1>
          <p className="lead text-center bg-dark text-light mt-3 py-2">
            {t("notfound:PAGE_NOT_FOUND")}
          </p>
        </div>
      </div>
    </div>
  );
}
