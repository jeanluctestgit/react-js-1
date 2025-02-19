import React from 'react'

export default function Panier(props) {
    return (
        <div>
            <p>Number Item : <span className = "badge badge-primary">{ props.numItem }</span></p>
            <p className = "badge badge-primary w-100" ><span className="float-left">Total :</span> <span className="float-right">{ props.total }</span></p>
        </div>
    )
}
