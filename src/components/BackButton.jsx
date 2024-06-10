import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({children}) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        <Navigate to="cities" replace/>
      }}
      type="back"
    >
      &larr; back
    </Button>
  );
}

export default BackButton;
