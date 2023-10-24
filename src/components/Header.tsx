import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"

interface HeaderType {
    title: string,
    subtitle: string,
}

export const Header = ({title, subtitle}:HeaderType) => {
    const theme =  useTheme()
    const colors = tokens(theme.palette.mode);
    return (
        <Box py={2}>
            <Typography fontWeight={'bold'} variant="h3" >
                {title}
            </Typography>
            <Typography color={theme.palette.mode === 'dark' ? colors.greenAccent[400]: colors.greenAccent[300]}>
                {subtitle}
            </Typography>
        </Box>
    )
}