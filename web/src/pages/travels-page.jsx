import { useEffect, useState } from "react";
import { PageLayout } from "../components/layouts";
import { TravelsList, TravelForm } from "../components/ui";
import * as ApiClient from "../services/api-client";


function TravelsPage() {
  const [travels, setTravels ] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  const followingTravels = travels.filter((travel) => travel.follow);
  const myTravels = travels.filter((travel) => !travel.follow);

  useEffect(() => {
    async function getTravels() {
      const travels = await ApiClient.getTravels();
      setTravels(travels);
    };
    
    getTravels();
  },[]);

  const handleOnClick = () => {
    setShowForm(true);
  }

  return (
    <div className="position-relative">
      { showForm && (
        <div className="position-fixed w-100 h-100 top-0 z-3 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
          <div className=" d-flex flex-column bg-light rounded-3">
            <button className="btn align-self-end" onClick={() => setShowForm(false)}><i className="fa fa-close"></i></button>
            <TravelForm />
          </div>
        </div>) 
      }
      <PageLayout>
        <div className="row">
          <div className="col bg-secondary d-flex flex-column justify-content-around rounded min-vh-100">
            <p className="text-center fs-4">Want to go somewhere?</p>
            <p className="text-center fs-4">Keep track of other's travels on future updates</p>
          </div>
          <div className="col-10">
            <div className="bg-warning rounded p-2">
              <h2 className="m-2">Your Travels</h2>
              <button className="btn btn-secondary ms-3" onClick={ () => handleOnClick() }>Create Travel</button>
              <div className="container overflow-x-scroll">
                <TravelsList travels={ myTravels }/>
              </div>  
            </div>
            <div className="col bg-warning rounded mt-2">
              <h2 className="m-2">Followed Travels</h2>
              <TravelsList travels={ followingTravels }/>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default TravelsPage;