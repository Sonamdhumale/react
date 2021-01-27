import React from 'react'
export default function FullPageLoader(props) {
    return (
        <div className = ''> 
            {
                props.data.map((data)=>(
                    <p>{data.title}</p>
                ))
            }
        </div>
    )
}