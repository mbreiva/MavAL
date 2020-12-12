import React, { Component } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import IconButton from '@material-ui/core/IconButton'

export default class AddRemoveMediaButton extends Component {
    render() {
        return (
            <div>
                <IconButton>
                    <AddCircleOutlineIcon />
                </IconButton>
            </div>
        )
    }
}
