import AccountCircle from '@mui/icons-material/AccountCircle'
import { AppBar, Button, IconButton, Link, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Searchs from './Searchs'
const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: '#fff', borderBottom: '1px solid #ede7f6', height: 60, marginBottom: '10px' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ maxWidth: '900px', m: 'auto' }}>
            <Link to="/">
              <img src="https://static-cms-plo.zadn.vn/v3/web/styles/img/logo.png" alt="" height={'30px'} />
            </Link>

            <Button
              sx={{
                marginLeft: '30px',
                marginRight: '30px',
                backgroundColor: '#da0101',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
              }}
              variant="contained"
            >
              Gửi tin
            </Button>
            <Button
              sx={{
                marginRight: ' 10px',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
              }}
              variant="contained"
            >
              Media
            </Button>
            <Searchs />
            <IconButton
              size="large"
              color="default"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
              }}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
