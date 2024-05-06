import {Box,useTheme} from "@mui/material"
import Header from '../../Components/Header'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../Theme"
import { Typography } from "@mui/material"

const FAQ=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return (<Box margin="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
        <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[400]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color={colors.gray[100]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum dolores delectus aliquam eos maiores. Ratione repellendus iusto quasi ipsa quibusdam laboriosam, nesciunt unde alias in dolorum libero maxime illum.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum dolores delectus aliquam eos maiores. Ratione repellendus iusto quasi ipsa quibusdam laboriosam, nesciunt unde alias in dolorum libero maxime illum.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favourite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum dolores delectus aliquam eos maiores. Ratione repellendus iusto quasi ipsa quibusdam laboriosam, nesciunt unde alias in dolorum libero maxime illum.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum dolores delectus aliquam eos maiores. Ratione repellendus iusto quasi ipsa quibusdam laboriosam, nesciunt unde alias in dolorum libero maxime illum.</Typography>
            </AccordionDetails>
        </Accordion>
    </Box>)
}

export default FAQ;