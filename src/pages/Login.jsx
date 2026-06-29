import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function Login() {
  const navigate = useNavigate();

  const textField1 = {
    position: "absolute",
    top: "204px",
    left: "20px",
    width: "335px",

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
      color: "#919191",

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

  const textField2 = {
    position: "absolute",
    top: "267px",
    left: "20px",
    width: "335px",
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
      color: "#919191",

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

  const LoginButton = {
    position: "absolute",
    top: "321px",
    left: "20px",
    width: "335px",
    height: "46px",
    background: "#CBCBCB 0% 0% no-repeat padding-box",
    borderRadius: "6px",
    opacity: 1,
    textTransform: "none",
    textAlign: "center",
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 500,
    fontStyle: "normal",
    fontVariant: "normal",
    fontSize: "16px",
    lineHeight: "17px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#B0B0B0",
    },
  };

  return (
    <div className="Container">
      <h3 className="heading2">
        Signin to your <br />
        PopX account
      </h3>
      <p className="LoginDescription">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>

      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="Email Address"
          placeholder="Enter email address"
          sx={textField1}
        />
        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Enter password"
          sx={textField2}
        />
      </Box>

      {/* ✅ Navigate to Welcome Page */}
      <Button
        variant="contained"
        sx={LoginButton}
        onClick={() => navigate("/Dashboard")}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
