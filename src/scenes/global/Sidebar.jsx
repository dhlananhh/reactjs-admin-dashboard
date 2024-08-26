// Import necessary libaries
import React, { useState, useContext } from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";

// Import icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


// Sidebar Item
const Item = ({ title, path, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={ () => setSelected(title) }
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={path} />
        </MenuItem>
    )
}


// Sidebar Component
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ isCollapsed, setIsCollapsed ] = useState(false);
    const [ selected, setSelected ] = useState('Dashboard');


    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Logo and Menu Icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={ isCollapsed ? <MenuOutlinedIcon /> : undefined }
                        style={{
                            color: colors.grey[100],
                            margin: "10px 0 20px 0",
                        }}
                    >
                        { !isCollapsed && (
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                ml="15px"
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton onClick={ () => setIsCollapsed(!isCollapsed) }>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        ) }
                    </MenuItem>

                    {/* User Image */}
                    { !isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignContent="center">
                                <img
                                    alt='profile-user'
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", "borderRadius": "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant='h2'
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant='h5' color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box> 
                    ) }

                    {/* Menu Items */}
                    <Box
                        paddingLeft={ isCollapsed ? undefined : "10%" }
                    >
                        {/* Dashboard */}
                        <Item
                            title="Dashboard"
                            path="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {/* Data */}
                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>

                        <Item
                            title="Manage Team"
                            path="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Contact Information"
                            path="/contact"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Invoices Balance"
                            path="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {/* Pages */}
                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>

                        <Item 
                            title="Profile Form"
                            path="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Calendar"
                            path="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="FAQ Page"
                            path="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {/* Charts */}
                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>

                        <Item 
                            title="Bar Chart"
                            path="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Pie Chart"
                            path="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Line Chart"
                            path="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Geography Chart"
                            path="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar