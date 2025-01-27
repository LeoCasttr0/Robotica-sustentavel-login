import React from "react";
import Alert from "@mui/material/Alert";

const AlertMessage = ({ message, severity = "error" }) => {
  return (
    <Alert severity={severity} style={{ marginBottom: "20px" }}>
      {message}
    </Alert>
  );
};

export default AlertMessage;
