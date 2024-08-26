// Import necessary libaries
import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockData } from '../../data/mockData.js'

// Import icons
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

// Import Header components
import Header from "../../components/Header";
import { render } from '@testing-library/react'
import { LockOpenOutlined } from '@mui/icons-material'


// Create a Team component
const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box 
                        width="60%"
                        m="0 auto"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : access === "manager"
                                ? colors.greenAccent[700]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        { access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
                        { access === "manager" && <SecurityOutlinedIcon /> }
                        { access === "user" && <LockOpenOutlinedIcon /> }
                        <Typography
                            color={colors.grey[100]}
                            sx={{ ml: "5px" }}
                        >
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header 
                title="Team"
                subtitle="Manage the team members"
            />
            <Box>
                
            </Box>
        </Box>
    )
}

export default Team