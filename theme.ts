
import { extendTheme } from '@chakra-ui/react'
import { mode, Styles } from "@chakra-ui/theme-tools"
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "black",
      },
    })},


    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      brand: {
        100: "#ff4310",
        200: "#d82d00",
      },
    },
    fonts: {
      body: "Poppins, sans-serif",
      heading: "Poppins, sans-serif",
    },
    fontWeights: {
      thin: 100,
      regular: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  })

  export default theme