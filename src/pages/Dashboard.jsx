import { Box, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "../styles/global.css";

function Dashboard() {
  return (
    <div className="Container">
      {/* Header Box */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "375px",
          height: "68px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.08)",
          display: "flex",
          alignItems: "center",
          px: "15px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21px",
            color: "#1D2226",
            textTransform: "capitalize",
          }}
        >
          Account Settings
        </Typography>
      </Box>

      {/* Profile Section */}
      <Box
        sx={{
          position: "absolute",
          top: "88px",
          left: "20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Profile Image with Camera Icon */}
        <Box sx={{ position: "relative", width: "72px", height: "72px" }}>
          <Avatar
            src="/Ellipse114.png"
            sx={{
              width: "72px",
              height: "72px",
              border: "2px solid #6C25FF",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#FFFFFF",
              border: "1px solid #6C25FF",
              width: "24px",
              height: "24px",
              "&:hover": { backgroundColor: "#F5F5F5" },
            }}
          >
            <CameraAltIcon sx={{ fontSize: "14px", color: "#6C25FF" }} />
          </IconButton>
        </Box>

        {/* User Info */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Rubik', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "19px",
              color: "#1D2226",
              textTransform: "capitalize",
            }}
          >
            Marry Doe
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Rubik', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "19px",
              color: "#1D2226",
              textTransform: "capitalize",
            }}
          >
            Marry@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          position: "absolute",
          top: "204px",
          left: "20px",
          width: "337px",
          fontFamily: "'Rubik', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22px",
          color: "#1D2226",
          textTransform: "capitalize",
        }}
      >
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </Typography>
    </div>
  );
}

export default Dashboard;
