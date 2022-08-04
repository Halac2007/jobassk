import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CatePost = (props) => {
  return (
    <>
      <Grid container maxWidth="900px" m="auto">
        <Grid container item xs={12} sm={12} md={8} spacing={4}>
          {props.post.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={12}>
              <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                <img src={item.imagetop} width="100%" height="auto" alt="" />
                <Typography fontWeight="700">{item.title}</Typography>
              </Link>
            </Grid>
          ))}

          <Grid container item xs={12} sm={12} md={12} spacing={2}>
            {props.bpost.map((item) => (
              <Grid item xs={4} sm={4} md={4}>
                <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography>{item.title}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} md={4} paddingLeft="10px">
          {props.rpost.map((item) => (
            <Link href={item.link} sx={{ display: 'flex', textDecoration: 'none', color: '#212529' }}>
              <Box sx={{ paddingBottom: '10px' }}>
                <img src={item.image} width="100px" height="70px" alt="" />
              </Box>
              <Typography sx={{ paddingLeft: '10px', marginLeft: '10px' }}>{item.title}</Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
      <Grid container maxWidth="900px" m="auto" paddingTop="20px">
        <Grid item xs={12} sm={12} md={8} spacing={2}>
          {props.listpost.map((item) => (
            <Link href={item.link} sx={{ display: 'flex', textDecoration: 'none', color: '#212529' }}>
              <Box sx={{ paddingBottom: '10px' }}>
                <img src={item.image} width="150px" height="100px" alt="" />
              </Box>
              <Typography sx={{ paddingLeft: '10px', marginLeft: '10px' }}>{item.title}</Typography>
            </Link>
          ))}
        </Grid>
        <Grid item display={{ xs: 'none', sm: 'none', md: 'block' }} md={4} paddingLeft="10px">
          <img src="https://sunglasshutusa.com/hinh-anh-bat-dong-san-dep/imager_20_2109_700.jpg" alt="#"></img>
        </Grid>
      </Grid>
    </>
  )
}

export default CatePost
