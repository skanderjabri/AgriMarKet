import React from 'react'
import { useParams } from 'react-router-dom'
const SingleForum = () => {
    const { id } = useParams()
    return (
        <div>
            SingleForum {id}
        </div>
    )
}

export default SingleForum