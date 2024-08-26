// Import necessary libaries
import React, { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { ColorModeContext, tokens } from '../../theme';

// Import icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* -*--*--*--*--*--*- Search Bar -*--*--*--*--*--*- */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchOutlinedIcon />
                </IconButton>
            </Box>

            {/* -*--*--*--*--*--*- Icons -*--*--*--*--*--*- */}
            <Box display="flex">
                {/* Icon #1 */}
                <IconButton onClick={ colorMode.toggleColorMode }>
                    {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                </IconButton>

                {/* Icon #2 */}
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>

                {/* Icon #3 */}
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>

                {/* Icon #4 */}
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>


            </Box>
        </Box>
    )
}

export default TopBar;