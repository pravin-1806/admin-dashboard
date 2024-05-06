    import { useState } from "react";
    import FullCalendar from "@fullcalendar/react";
    import {formatDate} from "@fullcalendar/core";
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import listPlugin from '@fullcalendar/list'
    import interactionPlugin from '@fullcalendar/interaction'
    import { Box,List,ListItem,ListItemText,Typography,useTheme } from "@mui/material";
    import { tokens } from "../../Theme";
    import Header from "../../Components/Header";
    import { Margin } from "@mui/icons-material";

    const Calendar=()=>{
        const theme=useTheme();
        const colors=tokens(theme.palette.mode);
        const [currentEvents,setCurrentEvents]=useState([]);

        const handleDateClick=(selected)=>{
            const title=prompt("Please Enter the new title for your Event ");
            const calendarApi=selected.view.calendar;
            calendarApi.unselect();

            if(title){
                calendarApi.addEvent({
                    id:`${selected.dateStr}-${title}`,
                    title,
                    start:selected.startStr,
                    end:selected.endStr,
                    allDay:selected.allDay,
                });
            }
        }
        const handleEventClick=(selected)=>{
            if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
                selected.event.remove();
            }
        }
        return <Box margin="20px">
            <Header title="CALENDAR" subtitle="Full Calendar interactive page" />
            <Box display="flex" justifyContent="space-around" marginTop="10px">
                {/* Calendar SideBar */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} padding="15px" borderRadius="4px" maxHeight="100%">
                    <Typography variant="h5">EVENTS</Typography>
                    <List>
                        {currentEvents.map((event)=>(
                            <ListItem key={event.id} sx={{backgroundColor:colors.greenAccent[500],borderRadius:"2px",margin:"10px 0",}}>
                                <ListItemText
                                primary={event.title} 
                                secondary={
                                <Typography>
                                    {formatDate(event.start,{
                                        year:"numeric",
                                        month:"short",
                                        day:"numeric"
                                    })}
                                </Typography>}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar */}
                <Box flex="1 1 100%" marginLeft="15px">
                    <FullCalendar 
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    headerToolbar={{
                        left:"prev,next today",
                        center:"title",
                        right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events)=>{setCurrentEvents(events)}}
                    initialEvents={[
                        {id:"1234",title:"All-day event",date:"2024-01-25"},
                        {id:"4321",title:"New Event",date:"2024-01-26"}
                    ]}
                    />
                </Box>
            </Box>
        </Box>
    }

    export default Calendar;