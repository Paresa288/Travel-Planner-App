import { PageLayout } from "../components/layouts";
import { RegisterForm } from "../components/auth";
import { Link } from "react-router";

function RegisterPage() {
  return(
    <PageLayout className="d-flex justify-content-center align-items-center">
      <div className="bg-secondary rounded-4 shadow border-shadow row w-75 m-auto align-items-center" style={{ height: "400px"}}>
        <div className="col p-3 bg-dark shadow-sm text-light rounded-4 h-100 d-flex flex-column">
          <h4 className="mb-3">Start Organizing your travels with Travel Planner</h4>
          <p>
            Plan and track your travels with ease. <br /> Share them with your friends and explore the world together
          </p>
        </div>
        <div className="col p-4">
          <RegisterForm />
          <hr className="py-2"/>
          <Link to="/login" className="btn w-100 shadow">Login</Link>
          <Link to="/" className="btn btn-dark mt-2 w-100 shadow">Back to Home</Link>
        </div>
      </div>
      
    </PageLayout>
  )
};

export default RegisterPage;
