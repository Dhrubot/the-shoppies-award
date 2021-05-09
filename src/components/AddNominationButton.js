import React from 'react'
import { Button } from '@material-ui/core'

const AddNominationButton = () => {
    return (
        <Button
          fullWidth
          variant="contained"
          style={{ color: "red" }}
        >
          NOMINATE
        </Button>
    )
}

export default AddNominationButton;
