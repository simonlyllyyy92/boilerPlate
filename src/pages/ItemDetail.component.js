import React from 'react'

const ItemDetail = (props) => (
    <div>
        <h1>Item name: {props.match.params.topicId}</h1>
    </div>
)

export default ItemDetail