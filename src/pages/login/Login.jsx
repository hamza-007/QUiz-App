import React from "react";
import TextField from "@mui/material/TextField";
import Btn from "../../components/Btn";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/actions/UserActions";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlePass = (e) => {
    setpass(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(login(email));
    navigate("/");
  };
  return (
    <div className='login'>
      <div className='login_form'>
        <Box>
          <TextField
            label='Email'
            type='email'
            name='email'
            variant='filled'
            color='secondary'
            onChange={handleEmail}
            required
          />
        </Box>
        <Box>
          <TextField
            color='secondary'
            label='Password'
            type='password'
            name='password'
            variant='filled'
            onChange={handlePass}
            required
          />
        </Box>
        <Box>
          <Btn
            type='submit'
            text='Login'
            variant='outlined'
            color='secondary'
            style={{ minWidth: 300 }}
            handler={handleSubmit}
          />
        </Box>
      </div>
    </div>
  );
};

export default Login;
