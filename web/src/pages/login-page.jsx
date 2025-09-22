import { PageLayout } from "../components/layouts";
import { LoginForm } from "../components/auth";
import { Link } from "react-router";

function LoginPage() {
  return(
    <PageLayout className=" d-flex justify-content-center align-items-center">
      <div className="row rounded-4 border border-1 bg-secondary shadow w-75 m-auto align-items-center" style={{ height: "400px" }} >
        <div className="col p-3">
          <h3 className="">Login</h3>
          <LoginForm />
          <hr className="my-2"/>
          <Link to="/register" className="btn btn-secondary d-block text-dark shadow">Register</Link>
          <Link to="/" className="btn btn-dark mt-2 w-100 shadow">Back to Home</Link>
        </div>
        <div className="col p-3 bg-dark text-light rounded-4 shadow h-100 d-flex flex-column text-center justify-content-between">
            <h3 className="h4 fw-semibold my-3">Access Your Tasks Anytime</h3>
            <p className="">
              Log in to Travel Planner to manage your travels, collaborate with your team, and stay organized. Our secure platform ensures your data is protected while providing a seamless experience across devices.
            </p>
            <p className="">
              Don't have an account? <Link to="/register" className="text-decoration-none">Sign up now</Link> to get started!
            </p>
        </div>
      </div>
    </PageLayout>
  )
};

export default LoginPage;
