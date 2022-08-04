import { Box } from '@mui/system'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Services from './Services/Services'

function App() {
  return (
    <Box sx={{ padding: '0px 10px' }}>
      <Header />
      <Services />
      <Footer />
    </Box>
  )
}

export default App
