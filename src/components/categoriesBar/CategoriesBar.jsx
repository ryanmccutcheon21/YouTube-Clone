import React, { useState } from 'react'
import './_categories.scss'

const keywords = [
    'All',
    'React.js',
    'Angular.js',
    'React Native',
    'Use of API',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Coding',
    'Baseball',
]

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')
    const handleClick = value => {
        setActiveElement(value)
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((value, index) => (
                    <span
                        key={index}
                        onClick={() => handleClick(value)}
                        className={activeElement === value ? 'active' : ''}>
                        {value}
                    </span>
                ))
            }
        </div >
    )
}

export default CategoriesBar
