import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = (props) => {
  return (
    <Box>
      <FormControl sx={props.style} color={props.color}>
        <InputLabel>{props.title}</InputLabel>
        <Select
          label={props.title}
          value={props.value}
          onChange={(e) => props.onSelect(e)}
        >
          {props.customItem
            ? props.options.map((item, key) => (
                <div key={key} style={props.itemStyle}>
                  <props.customItem
                    onChange={(e) => props.itemHandler(item.value, e)}
                  />
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                </div>
              ))
            : props.options.map((item, key) => (
                <MenuItem key={key} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
