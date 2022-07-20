import React from "react";
import TextField from "@mui/material/TextField";
import Btn from "./Btn";
import { Box } from "@mui/material";
const Register = () => {
  return (
    <div className='login'>
      <div className='login_form'>
        <form method='POST' action='/register'>
          <Box>
            <TextField label='Username' name='username' variant='filled' />
          </Box>

          <Box>
            <TextField label='Email' name='email' variant='filled' />
          </Box>
          <Box>
            <TextField
              label='Password'
              type='password'
              name='password'
              variant='filled'
            />
          </Box>
          <Box>
            <Btn
              text='Sign Up'
              type='submit'
              variant='outlined'
              color='secondary'
              style={{ minWidth: 300 }}
            />
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Register;
