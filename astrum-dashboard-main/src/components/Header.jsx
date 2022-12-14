import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="0">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[600]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
