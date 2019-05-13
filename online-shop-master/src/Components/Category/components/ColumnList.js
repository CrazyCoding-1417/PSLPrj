import React, { Fragment } from 'react'

const ColumnList = props => {
    const renderedColumns = props.columns.map((column, i) => <div className="column-list" key={i}>
        {column.map((text, j) => <a href='/'><h5 key={j}>{text}</h5></a>)}
    </div>)

    return (
        <Fragment>
            <h3 className="title" style={{ margin: 30 }}>{props.title}</h3>
            <div className="columns">
                {renderedColumns}
            </div>
        </Fragment>
    )
}

export default ColumnList