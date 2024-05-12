import React from "react";
import SidebarFilter from "../_components/FilterSidebar";
import { ArrowDown } from "lucide-react";
import data from "@/data.json";
import SingleProject from "../_components/SingleProject";
const Page = () => {

  const projects = data.listings;

  return (
    <div className="flex h-full flex-col items-center  bg-gradient-to-b from-gray-100 to-gray-300  px-20 w-full pt-8 justify-between gap-4 pb-20">
      <div className="bg-black h-64 w-full mt-1 rounded-3xl text-white flex p-10  justify-between items-center">
       
         
            <h1 className="font-medium text-6xl ">Projects List</h1>
            {/* <p>project list</p> */}
         

          <input
            type="text"
            placeholder="search"
            className="w-1/2  h-10 bg-gray-200 py-2 px-4 rounded-3xl"
          />
      
        
      </div>

      <div className="h-full  flex w-full gap-4 rounded-3xl">
        <div className="w-1/5 bg-black rounded-3xl pt-20">
          <SidebarFilter />
        </div>
        <div className="w-4/5 flex flex-col justify-between text-black text-right gap-5 bg-white h-full rounded-3xl p-3">
         
         <div className="flex justify-end pr-20">
          Sorting <ArrowDown />
         </div>

         <div className="h-full">
  {projects.map((project, index) => {
    return (
      <SingleProject
        key={index}
        project={project}
        isPreferred={index === 0 || index === 2 || index === 5 ? true : false}
      />
    );
  })}
</div>

        </div>
      </div>
    </div>
  );
};

export default Page;
