import {
  Box,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function Signup() {
  const navigate = useNavigate();

  const textFieldStyles = {
    width: "335px",
    position: "absolute",
    left: "20px",

    "& .MuiOutlinedInput-root": {
      height: "40px",
      borderRadius: "6px",

      "& fieldset": {
        borderColor: "#CBCBCB",
      },

      "&:hover fieldset": {
        borderColor: "#CBCBCB",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#CBCBCB",
      },
    },

    "& .MuiOutlinedInput-input": {
      padding: "0 14px",
      height: "40px",
      boxSizing: "border-box",
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#1D2226",

      "&::placeholder": {
        color: "#919191",
        opacity: 1,
        fontFamily: "'Rubik', sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
      },
    },

    "& .MuiInputLabel-root": {
      top: "-2px",
      fontSize: "14px",
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 400,
      lineHeight: "17px",
      color: "#919191",
      transform: "translate(14px, 12px) scale(1)",
      transformOrigin: "top left",
    },

    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
      color: "#6C25FF !important",
    },
  };

  const createAccountButton = {
    position: "absolute",
    left: "20px",
    top: "545px",
    width: "335px",
    height: "46px",
    background: "#6C25FF 0% 0% no-repeat padding-box",
    borderRadius: "6px",
    opacity: 1,
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "17px",
    color: "#FFFFFF",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#5A1FE0",
    },
  };

  return (
    <div className="Container">
      <h3 className="heading2">
        Create your
        <br /> PopX account
      </h3>

      <Box component="form" noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          placeholder="Enter Full Name"
          sx={{ ...textFieldStyles, top: "140px" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          placeholder="Enter Phone Number"
          sx={{ ...textFieldStyles, top: "209px" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          placeholder="Enter Email Address"
          sx={{ ...textFieldStyles, top: "278px" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Enter Password"
          type="password"
          sx={{ ...textFieldStyles, top: "347px" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Company"
          placeholder="Enter Company Name"
          sx={{ ...textFieldStyles, top: "416px" }}
        />
      </Box>

      <FormControl
        sx={{
          position: "absolute",
          left: "20px",
          top: "474px",
          width: "335px",
        }}
      >
        <FormLabel
          sx={{
            width: "125px",
            height: "15px",
            textAlign: "left",
            fontFamily: "'Rubik', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "17px",
            letterSpacing: "0px",
            color: "#919191",
            opacity: 1,
            mb: "8px",
            "&.Mui-focused": {
              color: "#919191",
            },
          }}
        >
          Are you an agency?
        </FormLabel>

        <RadioGroup
          row
          defaultValue="yes"
          sx={{
            display: "flex",
            gap: "24px",
          }}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: "#CBCBCB",
                  "&.Mui-checked": {
                    color: "#6C25FF",
                  },
                }}
              />
            }
            label="Yes"
            sx={{
              fontFamily: "'Rubik', sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "17px",
              color: "#1D2226",
            }}
          />

          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  color: "#CBCBCB",
                  "&.Mui-checked": {
                    color: "#6C25FF",
                  },
                }}
              />
            }
            label="No"
            sx={{
              fontFamily: "'Rubik', sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "17px",
              color: "#1D2226",
            }}
          />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        sx={createAccountButton}
        onClick={() => navigate("/login")}
      >
        Create Account
      </Button>
    </div>
  );
}

export default Signup;
