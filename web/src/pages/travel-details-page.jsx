import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as ApiClient from "../services/api-client";
import { TaskCard } from "../components/ui";

function TravelDetailsPage() {
  const { id } = useParams();

  const [ travel, setTravel ] = useState();

  useEffect(() => {
    async function getTravel() {
      const travel = await ApiClient.getTravel(id);
      setTravel(travel);
    }
    getTravel();
  },[id])

  return (
    <div className="row mx-2 gap-2">
      <div className="col bg-secondary rounded min-vh-100" >
      </div>
      <div className="col-10 bg-light rounded">
        <div className="rounded d-flex gap-3 overflow-x-scroll mt-2" style={{ minHeight: "700px"}}>
          {travel?.schedule.map((day, i) => {
            return (
              <TaskCard key={day.title} day={i+1} schedule={day} index={i}/>
            )
          })}
        </div>
      </div>
    </div> 
  )
};

export default TravelDetailsPage;