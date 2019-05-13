import React, { Fragment } from 'react'
import ColumnList from '../components/ColumnList'
import ImageGrid from '../components/ImageGrid'
import { dataBuilding as data } from '../../../Products'

const Building = () => {
    return (
        <Fragment>
            <ColumnList title={data.title} columns={data.urlColumns} />
            <ImageGrid
                title={data.imageRow1.title}
                images={data.imageRow1.images} />
        </Fragment>
    )
}

export default Building
