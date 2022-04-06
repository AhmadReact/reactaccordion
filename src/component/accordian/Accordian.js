import React, { useState } from "react";
import { question } from "./api";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian = () =>{

    const [data,setDate] = useState(question.results);


return(
<>


<section className="main-div">
<h3>React Accordian</h3>
{
data.map((currentELem) =>
{
    const {id,original_title,overview} = currentELem;

return <MyAccordian key={id}   {...currentELem}></MyAccordian>

})
}


</section>
</>



)





}


export default Accordian;