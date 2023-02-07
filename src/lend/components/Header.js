import { Box, Typography, useTheme } from "@mui/material";
import { fontWeight } from "@mui/system";
import { tokens } from "../theme";

export const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};
