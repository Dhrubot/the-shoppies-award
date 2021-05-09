import React from 'react'
import { Typography } from '@material-ui/core'

const MovieListHeader = ({ header }) => {
    return (
            <Typography gutterBottom variant="h5" component="h2">
                {header}
            </Typography>
    )
}

export default MovieListHeader
