// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { WeatherProvider } from './context/WeatherContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <BrowserRouter>
  <WeatherProvider>
    <App />
  </WeatherProvider>
  </BrowserRouter>,
  </ChakraProvider>
)
