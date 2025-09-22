import { PageLayout } from "../components/layouts";
import { useAuth } from "../contexts/auth";
import { Link } from "react-router";

function LandingPage() {
  const { user } = useAuth();  

  return (
      <PageLayout>
        <section className="bg-light py-5">
          <div className="container text-center">
            <h2 className="display-4 fw-bold mb-4">Welcome to Travel Planner</h2>
            <p className="lead mb-4 text-muted">The ultimate solution for managing your travels efficiently and effectively.</p>
            <Link to={ !user ? "/login" : "/travels" } className="btn btn-primary btn-lg">Get Started</Link>
          </div>
        </section>
        <section id="features" className="py-5">
          <div className="container">
            <h2 className="h2 text-center mb-5 fw-bold">Why Choose Travel Planner?</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 text-center shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 card-title fw-semibold">Easy to Use</h3>
                    <p className="card-text text-muted">Intuitive interface designed for seamless management.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 card-title fw-semibold">Real-Time Collaboration</h3>
                    <p className="card-text text-muted">Work together with your team in real-time, anywhere.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 card-title fw-semibold">Secure & Reliable</h3>
                    <p className="card-text text-muted">Your data is safe with our top-notch security measures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
  )
}

export default LandingPage;