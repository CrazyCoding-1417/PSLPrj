import React from 'react'

const AdDouble = props => {
    return (
        <div className="ad-double">
            <img src={props.imgPic1} alt={props.imgAlt1} />
            <img src={props.imgPic2} alt={props.imgAlt2} />
        </div>
    )
}

export default AdDouble
