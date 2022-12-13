import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "./Store";

function Homepage() {
  
  const [state, setState] = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //  let temp={...state,data}s
    setState(() => [...state, data]);
    
    console.log(state)
    
  }

  return (
    <div id="homepage" className="h-screen  text-center text-lg font-sans text-pink-600 pt-20 " >
      <form className="flex flex-col flex-auto items-center" onSubmit={handleSubmit(onSubmit)} X>

        <div className="flex flex-row">
          <div className="flex flex-col">
        <input className="border border-cyan-500 contactInput"  defaultValue="Name" {...register("Name", { required: true })} />
        {errors.Name && <span className=" text-red-600">This field is required</span>}
          </div>
          <div className="flex flex-col">
        <input className="border border-cyan-500 contactInput"  defaultValue="Phone Number" {...register("ph_no", { required: true ,maxLength: 10,minLength: 10, pattern:[0-9]})} />
        {errors.ph_no && <span className=" text-red-600">Please Enter Valid Detail</span>}
</div>

        </div>
        <div className="flex flex-col">

        <input className="border border-cyan-500 contactInput"  defaultValue="Current post" {...register("Current_post", { required: true })} />
        {errors.Current_post && <span className=" text-red-600">This field is required</span>}
        </div>
  
    
        

        <input className="border border-pink-600 py-2 px-5" type="submit" />
      </form>
    </div>
  );
}

export default Homepage;
