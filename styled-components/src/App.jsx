import { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalStyles } from './components/styles/globalStyles';


const theme = {
  color:{
    header: 'yellow',
    hero: "linear-gradient(135deg, #5b8tb9, #ff6b6b)",
    footer: 'orange',
    button: "#ff6b6b"
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
        <Header/>
        <Hero/>
      </>
    </ThemeProvider>
  )
}

export default App
