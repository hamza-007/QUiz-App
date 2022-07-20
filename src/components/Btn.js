import React from "react";
import Button from "@mui/material/Button";

const Btn = (props) => {
  let { handler, variant, style, color, text, type ,label ,disabled } = props;
  return (
    <Button
      onClick={handler}
      variant={variant}
      sx={style}
      color={color}
      type={type}
      label={label}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default Btn;
