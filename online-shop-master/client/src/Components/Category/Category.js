import React from 'react'
import Appliances from './subcategories/Appliances'
import Bathroom from './subcategories/Bathroom'
import Building from './subcategories/Building'
import DoorsWindows from './subcategories/DoorsWindows'
import Electrical from './subcategories/Electrical'
import './category.scss'

const Category = props => {
    const renderedPage = () => {
        switch (props.pageTitle) {
            case 'Appliances':
                return <Appliances />
            case 'Bathroom':
                return <Bathroom />
            case 'Building Supplies':
                return <Building />
            case 'Doors ':
                return <DoorsWindows />
            case 'Electrical':
                return <Electrical />
            default:
                break;
        }
    }

    return (
        <div className="category-container">
            {renderedPage()}
        </div>
    )
}

export default Category