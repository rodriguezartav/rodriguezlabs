import React from "react";
import { query } from "data/Api";

import Item from "./Item";

export default function List(props) {
  return (
    <div>
      {" "}
      <h2 className="mt-1 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-3xl lg:text-3xl xl:text-4xl">
        Salones Disponibles
        <br className="hidden md:inline" />
      </h2>
      <p className="mb-10">dsd ds ds ds sd ds ds ds ds sd sdd sds dsds</p>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          {props.rooms.map((item) => {
            return <Item item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
