import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function Welcome() {
  const navigate = useNavigate();

  const buttonStyles1 = {
    position: "absolute",
    top: "669px",
    left: "20px",
    width: "335px",
    height: "46px",
    background: "#6C25FF 0% 0% no-repeat padding-box",
    borderRadius: "6px",
    opacity: 1,
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "17px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#5A1FE0",
    },
  };

  const buttonStyles2 = {
    position: "absolute",
    top: "725px",
    left: "20px",
    width: "335px",
    height: "46px",
    background: "#6C25FF4B 0% 0% no-repeat padding-box",
    opacity: 1,
    textAlign: "center",
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "17px",
    letterSpacing: "0px",
    color: "#1D2226",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#6C25FF4B",
    },
  };

  return (
    <div className="Container">
      <h3 className="heading">Welcome to PopX</h3>
      <p className="description">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>

      <Button
        variant="contained"
        sx={buttonStyles1}
        onClick={() => navigate("/signup")}
      >
        Create Account
      </Button>

      <Button
        variant="contained"
        sx={buttonStyles2}
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </Button>
    </div>
  );
}

export default Welcome;
