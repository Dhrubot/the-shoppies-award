import React from 'react'
import { Typography, Box } from '@material-ui/core'

const MovieListHeader = ({ header }) => {
    return (
        <Box>
            <Typography gutterBottom variant="h5" component="h2">
                {header}
            </Typography>
        </Box>
    )
}

export default MovieListHeader
