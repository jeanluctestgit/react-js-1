import React from 'react'

export default function Panier(props) {
    return (
        <div>
            <p>Number Item : { props.numItem }</p>
            <p>Total : { props.total }</p>
        </div>
    )
}
