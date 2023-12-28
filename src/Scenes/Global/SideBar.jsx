import Sider from 'antd/es/layout/Sider'
import Layout from 'antd/es/layout/layout'
import React from 'react'
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { tokens } from '../../Theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Menu } from 'antd'
import { Typography } from '@mui/material';

function SideBar() {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const [isCollapsed,setIsCollapsed]=useState(false);
  const Style1={
    display:"flex",justifyContent:"start",alignItems:"center",marginBottom:"10px",marginLeft:"15px",fontSize:"14px",
  }
  return (
    <Layout>
      <Sider collapsed={isCollapsed} >
        <Menu onClick={()=>{setIsCollapsed(!isCollapsed)}} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 0px 15px 0px",backgroundColor:`${theme.palette.mode==='dark'?"#4b5466":'#f2f0f0'}`,color:colors.gray[100]}}>
          <Typography variant='h2'>Admin</Typography>
          <MenuOutlinedIcon />
        </Menu>
        <Menu style={{display:"flex",flexDirection:"column",height:"90.5vh",backgroundColor:`${theme.palette.mode==='dark'?"#4b5466":'#f2f0f0'}`,color:colors.gray[100]}}>
          <Menu.Item key="Home" icon={<HomeOutlinedIcon/>} style={Style1}>Dashboard</Menu.Item>
          <Menu.Item key="ManageTeams" icon={<PeopleOutlinedIcon/>} style={Style1}>Manage Teams</Menu.Item>
          <Menu.Item key="Contact" icon={<ContactOutlinedIcon/>} style={Style1}>Contact Information</Menu.Item>
          <Menu.Item key="balances" icon={<ReceiptOutlinedIcon/>} style={Style1}>Invoices Balances</Menu.Item>
          <Menu.Item key="PeopleForm" icon={<PersonOutlinedIcon/>} style={Style1}>Profile Form</Menu.Item>
          <Menu.Item key="Calendar" icon={<CalendarTodayOutlinedIcon/>} style={Style1}>Calendar</Menu.Item>
          <Menu.Item key="FAQ" icon={<HelpOutlinedIcon/>} style={Style1}>FAQ Pages</Menu.Item>
          <Menu.Item key="Bar" icon={<BarChartOutlinedIcon/>} style={Style1}>Bar Chart</Menu.Item>
          <Menu.Item key="Pie" icon={<PieChartOutlinedOutlinedIcon/>} style={Style1}>Pie Chart</Menu.Item>
          <Menu.Item key="Line" icon={<TimelineOutlinedIcon/>} style={Style1}>Line Chart</Menu.Item>
          <Menu.Item key="Geography" icon={<MapOutlinedIcon/>} style={Style1}>Geography Chart</Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  )
}

export default SideBar