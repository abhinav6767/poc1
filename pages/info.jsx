import React ,{ useContext } from "react";
import { Context } from "./Store";

function Info() {
  const [state, setState] = useContext(Context);
  console.log("this is the news state for the info"+state)
  console.log(state)
  return <div id="info" className=" pt-20 h-screen text-lg font-sans text-pink-600">
    <table class="table-auto w-full text-center border border-white ">
  <thead>
    <tr className="">
      <th >Name</th>
      <th>Phone Number</th>
      <th>Designation</th>
    </tr>
  </thead>
  <tbody>
    {
    state.map((element) =>  (
<tr>
<td>{element.Name}</td>
      <td>{element.ph_no}</td>
      <td>{element.Current_post}</td>
    </tr>
    )
    
  )  }
      
  </tbody>
</table>
  </div>;
}

export default Info;
