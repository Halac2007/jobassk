import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Grid container spacing={2} maxWidth="900px" m="auto" p="30px 0px" sx={{ borderTop: '1px solid #eee' }}>
      <Grid container item xs={12} sm={3} md={3} spacing={1}>
        <Link to="/">
          <img src="https://static-cms-plo.zadn.vn/v3/web/styles/img/logo.png" alt="" height={'30px'} />
        </Link>
      </Grid>
      <Grid container item xs={12} sm={9} md={9} spacing={1}>
        <Box>
          <Typography>Copyright © 2008-2015 - Chịu trách nhiệm quản lý nội dung:</Typography>
          <Typography>Hotline: (84)-111111 (ext: 62173) - Email: demo@gmail.com</Typography>
          <Typography>Địa chỉ: Quận Tân Bình, TP.HCM</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
