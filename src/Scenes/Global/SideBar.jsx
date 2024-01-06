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
import { Button, Menu } from 'antd'
import { Typography } from '@mui/material';
import useToken from 'antd/es/theme/useToken';
import { Link } from 'react-router-dom';

function SideBar() {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const [isCollapsed,setIsCollapsed]=useState(false);
  const Style1={
    display:"flex",justifyContent:"start",alignItems:"center",marginBottom:"0px",marginBottom:"5px" ,marginLeft:"8px",fontSize:"14px",
  }
  return (
    <Layout>
      <Sider collapsed={isCollapsed} collapsible trigger={null} style={{height:"100vh",backgroundColor:`${theme.palette.mode==='dark'?"#4b5466":'#f2f0f0'}`}}>
        <Menu style={{display:"flex",justifyContent:"flex-start",marginLeft:"28px",paddingRight:"20px",alignItems:"center",padding:"15px 0px 15px 0px",backgroundColor:`${theme.palette.mode==='dark'?"#4b5466":'#f2f0f0'}`,color:colors.gray[100]}}>
        {isCollapsed&&(
          <Button onClick={()=>{setIsCollapsed(!isCollapsed)}} icon={<MenuOutlinedIcon/>} />
        )}
        
        {!isCollapsed && (
          <menuBox display="flex" alignItems="center" flexDirection="row" paddingRight="20px">
            <Button onClick={()=>{setIsCollapsed(!isCollapsed)}} icon={<MenuOutlinedIcon/>}/>
          </menuBox>
        )}
        
          {/*<Typography variant='h2'>Admin</Typography>
          <MenuOutlinedIcon /> 
          <Button icon={<MenuOutlinedIcon/>} onClick={()=>setIsCollapsed(!isCollapsed)}/>*/}
        </Menu>
        <Menu style={{backgroundColor:`${theme.palette.mode==='dark'?"#4b5466":'#f2f0f0'}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
        {!isCollapsed&&<img
          alt="User_Profile"
          style={{width:"100px",height:"100px",borderRadius:"50%",border:"0px solid transperant"}}
          src='../../Assets/Elon.png'
        />}
        </Menu>
        <Menu style={{display:"flex",flexDirection:"column",backgroundColor:`${theme.palette.mode==='dark'?"#4b5466":'#f2f0f0'}`,color:colors.gray[100]}}>
          <Menu.Item key="Home" icon={<HomeOutlinedIcon/>} style={Style1}><Link to={'/'}/>Dashboard</Menu.Item>
          <Menu.Item key="ManageTeams" icon={<PeopleOutlinedIcon/>} style={Style1}><Link to={'/team'}/>Manage Teams</Menu.Item>
          <Menu.Item key="Contact" icon={<ContactOutlinedIcon/>} style={Style1}><Link to={'/contact'}/>Contact Information</Menu.Item>
          <Menu.Item key="balances" icon={<ReceiptOutlinedIcon/>} style={Style1}>Invoices Balances</Menu.Item>
          <Menu.Item key="PeopleForm" icon={<PersonOutlinedIcon/>} style={Style1}><Link to={'/form'}/> Form</Menu.Item>
          <Menu.Item key="Calendar" icon={<CalendarTodayOutlinedIcon/>} style={Style1}>Calendar</Menu.Item>
          <Menu.Item key="FAQ" icon={<HelpOutlinedIcon/>} style={Style1}>FAQ Pages</Menu.Item>
          <Menu.Item key="Bar" icon={<BarChartOutlinedIcon/>} style={Style1}>Bar Chart</Menu.Item>
          <Menu.Item key="Pie" icon={<PieChartOutlinedOutlinedIcon/>} style={Style1}>Pie Chart</Menu.Item>
          <Menu.Item key="Line" icon={<TimelineOutlinedIcon/>} style={Style1}>Line Chart</Menu.Item>
          <Menu.Item key="Geography" icon={<MapOutlinedIcon/>} style={Style1}>Geography Chart</Menu.Item>
        </Menu>
      </Sider>
      <Layout>

      </Layout>
    </Layout>
  )
}

export default SideBar