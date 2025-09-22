import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as ApiClient from "../../../services/api-client";
import { useEffect, useState } from "react";

function TravelForm({ className= "form-floating rounded"}) {
  const { handleSubmit, formState: { errors, isValid, isSubmitting, }, register, setError, setFocus } = useForm({ mode: "all" });
  const navigate  = useNavigate();
  const [step, SetStep] = useState(0);

  useEffect(() => {
    setFocus("title");  
  }, [])

  const handleOnNext = () => {
    if (step < 5) {
      SetStep(step + 1)
    }
  }

  const handleOnPrevious = () => {
    if (step > 0) {
      SetStep(step - 1)
    }
  }

  const onSubmitCreateTravel = async (travel) => {
    try {
      travel = await ApiClient.createTravel(travel);
      navigate(`/travels/${travel.id}`);
    } catch (err) {
      const errors = err.response?.data.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((fieldName) => {
            setError(
              fieldName,
              { type: "manual", message: errors[fieldName] }
            );
          });
      } else {
        setError(
          "Error",
          { type: "manual", message: err.message }
        );
      };
    }
  }
  
  return (
    
    <form onSubmit={handleSubmit(onSubmitCreateTravel)} className="m-5 mt-0" style={{ width: "30rem", height: "10rem"}}>
      {/* TITLE */}
      {step === 0 && (
        <div >
          <h3 className="p-auto text-center" style={{ height:"6rm"}}>Start planning your Travel <br />by giving the project a name</h3>
          <div className={`input-group mb-1 ${className}`}>
            <input 
              id="titleInput"
              type="text" 
              className={`form-control bg-transparent border-0 ${errors.title ? "is-invalid" : ""}` }
              placeholder="Title"
              {...register( "title", { required: "A title is required" })}
            />
              <label htmlFor="titleInput">Title</label>
            { errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>
        </div>
      )}

      {/* ORIGIN */}
      {step === 1 && (
        <div>
          <h3 className="p-auto text-center" style={{ height:"6rm"}}>Now let's add <br />your place of origin</h3>
          <div className={`input-group mb-1 ${className}`}>
            <input
              id="originInput" 
              type="text" 
              className={`form-control bg-transparent border-0 ${errors.origin ? "is-invalid" : ""}` }
              placeholder="Origin"
              {...register( "origin", { required: "An origin is required" })}
            />
            <label for="originInput">Origin</label>
            { errors.origin && (
              <div className="invalid-feedback">{errors.origin?.message}</div>
            )}
          </div>
        </div>  
      )}

      {/* DESTINATIONS */}
      {step === 2 && (
        <div>
          <h3 className="p-auto text-center" style={{ height:"6rm"}}>It's time for <br />your desired destination</h3>
          <div className={`input-group mb-1 ${className}`}>
            <input 
              id="destinationsInput"
              type="text" 
              className={`form-control bg-transparent border-0 ${errors.destinations ? "is-invalid" : ""}` }
              placeholder="Destination"
              {...register( "destinations", { required: "An destination is required" })}
            />
            <label for="destinationsInput">Destination</label>
            { errors.destinations && (
              <div className="invalid-feedback">{errors.destinations?.message}</div>
            )}
          </div>
        </div>
      )}

      
      {/* STARTED AT */}
      {step === 3 && (
        <div>
          <h3 className="p-auto text-center" style={{ height:"6rm"}}>This is<br />THE DAY</h3>
          <div className={`input-group mb-1 ${className}`}>
            <input 
              id="startedAtInput"
              type="date" 
              className={`form-control bg-transparent border-0 ${errors.startedAt ? "is-invalid" : ""}` }
              placeholder="Started At"
              {...register( "startedAt", { required: "A starting date is required" })}
            />
            <label for="startedAtInput">When it starts</label>
            { errors.startedAt && (
              <div className="invalid-feedback">{errors.startedAt?.message}</div>
            )}
          </div>
        </div>
      )}
      
      {/* FINISHED AT */}
      {step === 4 && (
        <div>
          <h3 className="p-auto text-center" style={{ height:"6rm"}}>This is<br />THE DAY</h3>
          <div className={`input-group mb-1 ${className}`}>
            <input 
              id="finishedAtInput"
              type="date" 
              className={`form-control bg-transparent border-0 ${errors.finishedAt ? "is-invalid" : ""}` }
              placeholder="Finished At"
              {...register( "finishedAt", { required: "A finishing date is required" })}
            />
            <label for="finishedAtInput">When it ends</label>
            { errors.finishedAt && (
              <div className="invalid-feedback">{errors.finishedAt?.message}</div>
            )}
          </div>
        </div> 
      )}
      
      {/* TRAVEL METHODS */}
      {step === 5 && (
        <div>
          <h3 className="p-auto text-center" style={{ height:"6rm"}}>How are you going<br />to get there?</h3>
          <div className={`input-group mb-1 ${className}`}>
            <select 
              id="travelMethodsInput"
              className={`form-select bg-transparent border-0 ${errors.travelMethods ? "is-invalid" : ""}` }
              placeholder="Travel methods"
              {...register( "travelMethods", { required: "A travel method is required" })}
            >
              <option value="car">car</option>
              <option value="airplane">airplane</option>
              <option value="train">train</option>
              <option value="bus">bus</option>
              <option value="bicycle">bicycle</option>
              <option value="by foot">by foot</option>
              <option value="metro/subway">metro/subway</option>
              <option value="boat">boat</option>
              <option value="motorcycle">motorcycle</option>
              <option value="taxi">taxi</option>
            </select>
            <label for="travelMethodsInput">Travel Method</label>
            { errors.travelMethods && (
              <div className="invalid-feedback">{errors.travelMethods?.message}</div>
            )}
          </div>
        </div>
        
      )}

      <div className="mt-2 d-flex justify-content-between">
        <button type="button" id="previous-btn" className={`btn btn-primary w-25 ${step === 0 ? "disabled" : ""}`}  onClick={() => handleOnPrevious()}>Previous</button>
        <button type="button" id="next-btn" className={`btn btn-primary w-25 ${step === 5 ? "disabled" : ""}`}  onClick={() => handleOnNext()}>Next</button>
        <button type="submit" id="submit-btn" className="btn btn-primary w-25" disabled={isSubmitting || !isValid }>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        { errors.network && (
          <label for="submit-btn" className="text-danger">NetworkError</label>
        )}
      </div>  

    </form>
  )
}

export default TravelForm;