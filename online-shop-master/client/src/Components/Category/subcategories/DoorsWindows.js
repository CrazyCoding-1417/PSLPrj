import React, { Fragment } from 'react'
import ImageGrid from '../components/ImageGrid'
import { dataDoorsWindows as data } from '../../../Products'

const DoorsWindows = () => {
    return (
        <Fragment>
            <ImageGrid
                title={data.imageRow1.title}
                images={data.imageRow1.images} />
            <ImageGrid
                title={data.imageRow2.title}
                images={data.imageRow2.images} />
        </Fragment>
    )
}

export default DoorsWindows
