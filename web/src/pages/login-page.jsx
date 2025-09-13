import { PageLayout } from "../components/layouts";
import { LoginForm } from "../components/auth";
import { Link } from "react-router";

function LoginPage() {
  return(
    <PageLayout className=" d-flex justify-content-center align-items-center">
      <div className="row rounded-4 bg-secondary shadow w-75 m-auto align-items-center" style={{ height: "400px" }} >
        <div className="col p-3">
          <h3 className="">Login</h3>
          <LoginForm />
          <hr className="my-2"/>
          <Link to="/register" className="btn btn-secondary d-block text-dark shadow">Register</Link>
        </div>
        <div className="col p-3 bg-dark text-light rounded-4 shadow h-100 d-flex flex-column">
            <h2 className="align-self-center">Welcome!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut accusantium provident, quaerat odio voluptatum labore saepe
              aut dolores molestiae consequuntur iure placeat voluptatem fugiat,
              obcaecati vel porro in, fugit eaque.
            </p>
        </div>
      </div>
    </PageLayout>
  )
};

export default LoginPage;
