import React from 'react'
import { Typography, Box } from '@material-ui/core'

const EmptyList = ({ text }) => {
    const text1 = text;
    const text2 = text1 === 'Movies' ? 'Search for' : 'Search and add movies to'
    return (
        <Box>
        <Typography gutterBottom variant="body1" component="p">
            {`${text2} ${text}`}
        </Typography>
        </Box>
    )
}

export default EmptyList
