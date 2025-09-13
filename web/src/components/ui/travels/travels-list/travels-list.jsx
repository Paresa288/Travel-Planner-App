import { useEffect, useState } from "react";
import { TravelItem } from "../../../ui"
import * as UsersApi from "../../../../services/api-client";


function TravelsList() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    async function getTravels() {
      const travels = await UsersApi.getTravels();
      setTravels(travels);
    }

    getTravels();
  },[]);

  return(
    <ul>
      {travels.map((travel) => {
        <TravelItem 
          key={travel.id}
          title={travel.title}
        />
      })}
    </ul>
  )
};

export default TravelsList;