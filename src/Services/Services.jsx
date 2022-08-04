import { Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import CatePost from '../Components/Posts/CatePost'

const Services = () => {
  const [oaPost, setOaPost] = useState([])
  const [rightPost, setRightPost] = useState([])
  const [bottomPost, setBottomPost] = useState([])
  const [listPost, setListPost] = useState([])

  const [page, setPage] = useState([])
  useEffect(() => {
    const url = `https://crawlassk.herokuapp.com/`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setOaPost(data.slice(4, 5))
      setBottomPost(data.slice(5, 8))
      setRightPost(data.slice(8, 15))
      setListPost(data.slice(15, 25))
    })
  }, [])

  const handleClick = useCallback(() => {
    axios.get(`https://crawlassk.herokuapp.com/`).then((data) => {
      let start = 26 * page
      let end = 26 * (page + 1)
      let result = data.data.slice(start, end)
      setListPost((posts) => [...posts, ...result])

      setPage((page) => page + 1)
    })
  }, [page])

  return (
    <Box>
      <CatePost post={oaPost} bpost={bottomPost} rpost={rightPost} listpost={listPost} />
      <Box m={1} display="flex" justifyContent={'center'} alignItems={'center'} fontWeight={'900'}>
        <Button className="btn-more" onClick={handleClick}>
          Xem thêm
        </Button>
      </Box>
    </Box>
  )
}

export default Services
