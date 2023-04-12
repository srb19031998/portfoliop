import "../style.css"
import { useState, useEffect } from "react";
import Axios from "axios";
import MyCard,{details} from "./MyCard"
import "bootstrap/dist/css/bootstrap.min.css";
const Projects = ()=>{
    const [details, setDetails] = useState<details[]>([]);
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);
    const details = data.results;
    setDetails(details);
    console.log("deeeeeee",details)
  };

  useEffect(() => {
    console.log("useeffect kicks in")
    fetchDetails() 
    
  }, []);

    return(
        <div className="ui">
        <h1 style={{backgroundColor: 'lime'}}>Hellohhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
        
        <h1>
   
        
        {details.map((value) => {
          return (
            <>
            <h1>hi</h1>
            <MyCard {...value}/>
            </>
          );
        })}
      </h1>
        
        </div>
        )
}
export default Projects;