import React, { useState } from "react";
import Rdata from "../RestursntDetail.json";
import RestursntCard from "./RestursntCard";
import RangeInputWithMarks from "./Range";

export default function Resturant({mode}) {
  const [ResturantData, setResturantData] = useState(Rdata);
  const[rating,setrating] =useState(1);
  const[Resname,setResname] = useState('')
  
  const NameSearch = (e) => {
    let search = e.target.value;
  
    const filterData = Rdata.filter((ele) => {
      return (ele.name.toLowerCase().includes(search.toLowerCase()) && (rating <= ele.rating));
    });

    setResturantData(filterData);
    setResname(search)
  };
  const ratingHandler= (val)=>{
    
    const filterData = Rdata.filter((ele) => {
       return (ele.name.toLowerCase().includes(Resname.toLowerCase()) && (val <= ele.rating));
    });
    setResturantData(filterData);
    setrating(val);
  }
 const theme = {
  dark:{backgroundColor:'white',color:'black'},
  light:{backgroundColor:'black',color:'white'}
 }
 console.log(theme[`${mode}`]);
  return (
    <div className="mt-14 " style={theme[`${mode}`]}>
      <div className="px-16 pt-10 flex  items-center justify-between">
        <input style={mode === 'light'?{background:'#1B254A'}:null}
          type="text"
          className=" border-2"
          onChange={NameSearch}
        />
        <RangeInputWithMarks ch={ratingHandler} mode={mode}></RangeInputWithMarks>
      </div>

      <div className="mt-14 p-14 flex flex-wrap gap-10 justify-center w-full flex-shrink-0">
        {ResturantData.map((ele, index) => {
          return (
            <RestursntCard
              key={ele.id + index}
              data={{ ...ele }}
            mode={mode}></RestursntCard>
          );
        })}
      </div>
    </div>
  );
}
