import React from 'react'

export default function Navigation(props) {

    const { onChickChangePrevious, onChickChangeNext } = props;
    return (
        <div>
            <a href="#" onClick={onChickChangePrevious} className="btn btn-primary">
          Previous
        </a>
            <a href="#" onClick={onChickChangeNext} className="btn btn-primary">
          Next
        </a>
        </div>
    )
}
