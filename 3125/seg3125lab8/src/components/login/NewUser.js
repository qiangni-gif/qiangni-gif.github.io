import React from 'react';   
import StepperDemo from './StepperDemo'; 
import { useTranslation } from 'react-i18next';

function NewUser() {  
  const [t, i18n] = useTranslation();
  return (  
    <div className="container pt-5">
        <h4>{t("newuser:Account_Registration")}</h4>
				<hr/>
        <div className="NewUser">  
        <StepperDemo/>  
        </div>  
    </div>
  );  
}  
  
export default NewUser;  