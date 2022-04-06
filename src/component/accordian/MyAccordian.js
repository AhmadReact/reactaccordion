import React, { useState } from "react";



const MyAccordian = ({original_title,overview}) =>{
const [show,setshow] = useState("");

const Update = () =>{

if(show=="")
{

    setshow("active")
}
else{

    setshow("")
}



}

return(
<>

<div className="main-heading">

<button  onClick={Update}>  {show==""?"➕" : "➖" }</button>
<h3>{original_title}</h3>

</div>
<p className={"para" +" "+ show}  >{overview}</p>







<span style={{marginBottom:"15px"}}></span></>


)


}


export default MyAccordian;