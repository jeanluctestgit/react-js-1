import React from 'react'

export default function Navigation(props) {

    const { onProductChangePrevious, onProductChangeNext } = props;
    return (
        <div>
            <a href="#" onClick={onProductChangePrevious} className="btn btn-primary">
          Previous
        </a>
            <a href="#" onClick={onProductChangeNext} className="btn btn-primary float-right">
          Next
        </a>
        </div>
    )
}
