import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'

export default function FavouriteMediaButton(props) {
    const [favourite, setFavourite] = useState(props.favourite);
    
    const changeFavouriteStatus = (favourite) => {
        setFavourite(!favourite);
    };

    return (
        <div>
            <IconButton onClick={() => {changeFavouriteStatus(favourite); props.handleFavouriteChange(props.mediaId, favourite);}}>
                {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
        </div>
    );
}
