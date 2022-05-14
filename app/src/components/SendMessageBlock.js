import { Button, Stack, TextField, Typography } from "@mui/material";
import { postMessage } from "../service/ChatbotService";
import React from "react";


export function SendMessageBlock() {

    const [message, setMessage] = React.useState();
    const [response, setResponse] = React.useState({question: '', response: '', intentMatched: '', confidence: 0});

    const onSubmitMessage = () => {
        postMessage(message).then(response => {
            setResponse(response)
          }).catch(error => {
            alert('Server could not connect');
          })
    }

    return (
        <div>
            <Stack direction="row" spacing={5} >
                <Typography variant="outlined" sx={{ml: '30vh', mt: '2vh', fontWeight: "bold"}}>
                    INPUT MESSAGE
                </Typography>
                <TextField value={message} onChange={(e) => setMessage(e.target.value)} id="outlined-basic" label="Message" variant="outlined" sx={{width: '130vh'}} />
                <Button onClick={onSubmitMessage}>SEND</Button>
            </Stack>
            <Stack direction="column" spacing={2} sx={{mt: '5vh'}} >
                <Typography variant="h5" sx={{textAlign: 'center'}}>
                    RESPONSE
                </Typography>
                <Stack direction="column" spacing={2}>
                    <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 'bold'}}>
                        {'Intent:' + response.intentMatched}
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 'bold'}}>
                        {'Confidence:' + response.confidence}  
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 'bold'}}>
                        {'Response:' + response.response}  
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 'bold'}}>
                        {'Question asked:' + response.question }  
                    </Typography>
                </Stack>
            </Stack>
        </div>
    )
}