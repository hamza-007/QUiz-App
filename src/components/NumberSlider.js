import React from "react";
import Box from "@mui/material/Box";
const NumberSlider = (props) => {
  return (
    <Box className='slider' sx={props.style}>
      <input
        className='range-slider'
        type='range'
        value={props.data}
        min={props.min}
        max={props.max}
        onChange={props.handler}
      />
      <br />
      {props.data}
    </Box>
  );
};

export default NumberSlider;
