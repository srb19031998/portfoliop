import Count from './title';
import Button from './Button';

import Title from './Tit';
import Welcome, { details } from "./wel"
import React, { useCallback, useEffect, useState } from 'react';
 const Parent = ()=>{

 
 console.log("main app renders")
  const[age,setAge]= useState<number>(0)
    const[sal,setSal] = useState(50000);
  

    const incrementAge = useCallback(()=>{
      setAge(age + 1)
    },[age])
  
    const incrementSalary =useCallback(()=> {
      setSal(sal + 1000)
    },[sal])
  

    return(

<>
<h1>hi</h1>
<Title/>
      <Count text="age" count = {age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count = {sal}/>
      <Button handleClick={incrementSalary}>Increment sall</Button>
      <button>hi</button>

      </>

    )}
    export default Parent