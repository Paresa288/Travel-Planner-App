import { useFormContext } from "react-hook-form";

function StepDestinations() {
  const { formState: { errors }, register } = useFormContext();

  return (
    <div className="flex-grow-1 flex-shrink-0 border-bottom border-2 border-dark">
      <input type="text" 
        className={`bg-transparent border-0 ${errors.destinations ? "is-invalid" : ""}` }
        placeholder="Destinations"
        {...register("destinations", { required: "A destinations is required" })}
      />
      { errors.destinations && (
        <div className="invalid-feedback">{ errors.destinations.message }</div>
      )}
      <button type="submit">Next</button>
    </div>
  )  
};

export default StepDestinations;
