import React from 'react'
export default function FullPageLoader(props ) {
    return (
        <div className = ''> 
            {
                props.data.map((data)=>(
                    <div>
                       <p>id : {data.id}</p> 
                        <p>title :{data.title}</p>
                       <p> body :{data.body}</p>

                    </div>
                ))
            }
        </div>
    )
}