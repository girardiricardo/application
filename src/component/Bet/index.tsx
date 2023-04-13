import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Odds } from "../../App"
import { useState } from 'react';

type Props = {
  odd: Odds
}

const Bet = ({ odd }: Props) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <Grid item xs={5}>
      <Paper elevation={5} sx={{ paddingLeft: 2, paddingRight: 2, height: 90, backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="caption" color="white">WHO WILL WIN?</Typography>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
          <div style={{ width: '48%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={odd.teamA.logo} style={{ width: 35, height: 35 }} />
            <Typography variant="body2" color="white">{odd.teamA.name}</Typography>
            <Button
              variant={selectedTeam === odd.teamA.name ? 'contained' : 'text'}
              onClick={() => setSelectedTeam(selectedTeam === odd.teamA.name ? null : odd.teamA.name)}
            >
              {odd.teamA.odd}
            </Button>
          </div>
          <span style={{ width: 1, height: 30, backgroundColor: 'rgb(16, 20, 25)' }}/>
          <div style={{ width: '48%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center' }}>
            <img src={odd.teamB.logo} style={{ width: 35, height: 35 }} />
            <Typography variant="body2" color="white">{odd.teamB.name}</Typography>
            <Button
              variant={selectedTeam === odd.teamB.name ? 'contained' : 'text'}
              onClick={() => setSelectedTeam(selectedTeam === odd.teamB.name ? null : odd.teamB.name)}
            >
              {odd.teamB.odd}
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  )
}

export default Bet;