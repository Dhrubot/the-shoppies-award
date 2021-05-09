import React from 'react'
import { Button } from '@material-ui/core'

const RemoveNominationButton = () => {
    return (
        <Button
          fullWidth
          variant="contained"
          style={{ color: "red" }}
        >
          Remove Nomination
        </Button>
    )
}

export default RemoveNominationButton
