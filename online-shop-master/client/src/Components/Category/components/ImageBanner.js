import React from 'react'

const ImageBanner = props => {
    return (
        <a href={props.imgLink} target="_blank" rel="noopener noreferrer">
            <img src={props.imgPic} alt="" />
        </a>
    )
}

export default ImageBanner
