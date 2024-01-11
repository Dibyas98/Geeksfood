import React from "react";
import { MapPin, Utensils  } from 'lucide-react';

export default function RestursntCard(props) {

  return (
    <div className="w-[26rem] shadow-lg h-auto" style={props.mode === 'light' ? { backgroundColor: '#1B254A' } : null}>
      <div className="p-6 flex flex-col gap-2">
        <div className="flex gap-3 items-center justify-between">
          <h1 className="text-3xl font-semibold">{props.data.name}</h1>
          <p className="text-xl">star:{props.data.rating}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl flex"><MapPin />{props.data.address}</p>
          <p>{props.data.outcode} {props.data.postcode}</p>
        </div>
      </div>
      <div className="bg-[#F3F4F6] p-5">
        <p className="text-xl text-green-400 flex gap-1"><Utensils />{props.data.type_of_food}</p>
        <a href="" className="text-sky-600">Visit Menu</a>
      </div>
    </div>
  );
}
