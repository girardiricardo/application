import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, fetchOdds } from '@golden-gamble/utils';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useEffect, useState } from 'react';
import Bet from './component/Bet';

const muiTheme = createTheme(theme);

export type Team = {
  name: string
  logo: string
  odd: string
}

export type Odds = {
  teamA: Team
  teamB: Team
}

const App = () => {
  const [odds, setOdds] = useState<Odds[]>([]);

  useEffect(() => {
    handleFetchData()
  }, [])

  const handleFetchData = async () => {
    return fetchOdds()
      .then((data) => setOdds(data));
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ marginTop: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://img.uefa.com/imgml/uefacom/ucl/2021/logos/logo_dark.svg" style={{ width: 120, height: 120, marginBottom: 40 }}/>
        <Grid container spacing={2} rowSpacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          {odds && odds.map((o, k) => (
            <Bet key={k} odd={o} />
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App