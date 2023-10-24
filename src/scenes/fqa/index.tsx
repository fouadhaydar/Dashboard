import { Box, Accordion, Typography, AccordionSummary, AccordionDetails, useTheme } from "@mui/material"
import { Header } from "../../components/Header"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import myColors from "../../components/color";
import { useState } from "react";
import uuid from "react-uuid";

interface QuestionsAndAnswer {
    id: string,
    question: string,
    answer: string
}

const FQA = () => {
    const theme = useTheme()
    const { backgroundColorAction, btnColor} = myColors(theme.palette.mode)
    const [questions ] = useState<QuestionsAndAnswer[]>([
        {id: uuid(), question: "General settings",answer:" Lorem ipsum dolor sit amet, consectetur adipisicing elit Omnis totam ad ipsa neque "},
        {id: uuid(),question: "General settings",answer:" Lorem ipsum dolor sit amet, consectetur adipisicing elit Omnis totam ad ipsa neque "},
        {id: uuid(),question: "General settings",answer:" Lorem ipsum dolor sit amet, consectetur adipisicing elit Omnis totam ad ipsa neque "},
        {id: uuid(),question: "General settings",answer:" Lorem ipsum dolor sit amet, consectetur adipisicing elit Omnis totam ad ipsa neque "},
        {id: uuid(),question: "General settings",answer:" Lorem ipsum dolor sit amet, consectetur adipisicing elit Omnis totam ad ipsa neque "}

    ])
    return (
        <Box>
            <Header title="FQAs" subtitle="Frequently Asked Questions Page"/>
            <Box>
                {questions.map(ele => {
                    return (
                        <Accordion key={ele.id} sx={{
                            backgroundColor: backgroundColorAction,
                            boxShadow:"none",
                            marginY:"20px",
                            backgroundImage:'none',
                        }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }} variant="h5" color={btnColor} fontWeight={'bold'}>
                                {ele.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ width: '33%', flexShrink: 0 }} variant="h6">
                                {ele.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    )
                })}
            </Box>
        </Box>
    )
}

export default FQA;