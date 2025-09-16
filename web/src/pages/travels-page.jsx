import { useEffect, useState } from "react";
import { PageLayout } from "../components/layouts";
import { TravelsList } from "../components/ui";
import * as ApiClient from "../services/api-client";

function TravelsPage() {
  const [travels, setTravels ] = useState([]);

  useEffect(() => {
    async function getTravels() {
      const travels = await ApiClient.getTravels();
      setTravels(travels);
    };
    
    getTravels();
  },[]);

  const followingTravels = travels.filter((travel) => travel.following);
  const myTravels = travels.filter((travel) => !travel.following);

  return (
    <PageLayout>
      <div className="row">
        <div className="col-2 me-2 bg-primary rounded min-vh-100">
        </div>
        <div className="col">
          <div className="bg-warning rounded">
            <h2>Your Travels</h2>
            <TravelsList travels={ myTravels }/>
          </div>
          <div className="col bg-warning rounded mt-2">
            <h2>Followed Travels</h2>
            <TravelsList travels={ followingTravels }/>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default TravelsPage;