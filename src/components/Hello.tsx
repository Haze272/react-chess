import React, { useState } from "react";

const Hello=(props: any)=>{
    const [count, setCount] = useState(0);
    const {message, children} = props;
    const increase = () => {
        setCount(count+1);
    }

    return (
        <div className="hello">
            <h1>{message}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Hello;
