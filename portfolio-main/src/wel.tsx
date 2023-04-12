
import axios from 'axios';
import { useState,useEffect } from 'react';
export type details={
  id: number,
  singer: string,
  Songlength:string, 
  firstName:string,
  lastName:string  
}
const Welcome = ({id,
  singer,
  Songlength, 
  firstName,
  lastName}:details)=>{
    return(
      <>
    <ul>
<li>{id},{firstName}</li>
    </ul>
    </>
    )
  }
  export default  Welcome;

