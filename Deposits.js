import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total Placed Students</Title>
      <Typography component="p" variant="h4">
        *300
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 31 January, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View count
        </Link>
      </div>
    </React.Fragment>
  );
}
