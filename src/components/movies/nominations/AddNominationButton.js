import React from 'react'
import { Button } from '@material-ui/core'

const AddNominationButton = ({ disable }) => {
    return (
        <Button
          fullWidth
          variant="contained"
          style={{ color: "red" }}
          disabled={disable}
        >
          NOMINATE
        </Button>
    )
}

export default AddNominationButton;
