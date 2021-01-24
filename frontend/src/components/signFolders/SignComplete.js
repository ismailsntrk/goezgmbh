import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../../services/AuthService";

const SignComplete = () => {
  const { activationCode } = useParams();

  useEffect(() => {
    AuthService.emailActivation({ token: activationCode })
  },[activationCode]);

  return (
    <div>
      <h1>Uyelik Basariyla Tamamlandi</h1>
    </div>
  );
};

export default SignComplete;
