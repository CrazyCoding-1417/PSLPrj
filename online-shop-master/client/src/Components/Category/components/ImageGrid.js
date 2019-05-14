import React, { Fragment } from 'react'

const ImageGrid = props => {
    const renderImages = props.images.map((image, i) => <div className="image-block" key={i}>
        <img src={image.img} alt={image.caption} />
        <div className="text-block">
            <h5>{image.caption}</h5>
            {image.text ? <h6>{image.text}</h6> : null}
        </div>
    </div>
    )

    return (
        <Fragment>
            <h3 className="title">{props.title}</h3>
            <div className="image-grid">
                {renderImages}
            </div>
        </Fragment>
    )
}

export default ImageGrid
