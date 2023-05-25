import React from 'react';
import './Home.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import TabPostagens from '../../componentes/postagens/tabPostagens/TabPostagens';
function Home() {
  return (
    <>
      <Grid container gap={4} alignItems={'center'} justifyContent={'center'} style={{backgroundColor: '#385cb1'}}>
      <Grid item xs={4}>
        <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
          <Typography align='center' fontWeight={900} variant='h3'>Bem vindo ao blog pessoal</Typography>
          <Typography align='center' variant='body1'>Digita uns textos dahora pra nóis ai...</Typography>
          <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img src="https://i.imgur.com/9OZAbB5.png" alt="" width={'100%'} />
      </Grid>
    </Grid>
    <TabPostagens />
    </>
  );
}

export default Home;
