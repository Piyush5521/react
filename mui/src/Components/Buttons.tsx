import React from "react";
import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Buttons() {
  return (
    <div>
      <Stack spacing={4}>
        <Stack display='block' spacing={1} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>

        <Stack display='block' spacing={1} direction='row'>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success">Success</Button>
        </Stack>
        
        <Stack display='block' spacing={2} direction='row'>
          <Button variant="contained" color="primary" size='small'>small</Button>
          <Button variant="contained" color="primary" size='medium'>medium</Button>
          <Button variant="contained" color="primary" size='large'>large</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
          <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => alert('Clicked')}>Send</Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
          <IconButton aria-label="send" color="success" size='small'>
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
}

export default Buttons;
