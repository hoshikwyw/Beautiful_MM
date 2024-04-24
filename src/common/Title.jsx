import React from 'react'

const Title = (props) => {
    const { title } = props
    return (
        <div className=''>
            Welcome {title}
        </div>
    )
}

export default Title
