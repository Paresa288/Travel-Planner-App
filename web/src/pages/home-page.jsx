import { useEffect, useState } from "react";
import { PageLayout } from "../components/layouts";
import * as UsersApi from "../services/api-client";
import { TravelsList } from "../components/ui";

function HomePage() {
 

  return (
    <PageLayout>
      <div className="row">
        <div className="col-3 me-2 bg-primary rounded">
          Hello
        </div>
        <div className="col bg-warning rounded">
          <h2>Your Travels</h2>
          <TravelsList />
        </div>
      </div>
    </PageLayout>
  )
}

export default HomePage;