import React from 'react';

const Count = ({text,count}:{text:string,count:number}) => {
    console.log("countt renders")
    return(
        <>
        <h1>Hello,{text},howareyou--{count}</h1>
        </>
    )

}
export default  React.memo(Count);