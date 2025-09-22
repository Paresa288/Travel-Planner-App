import { useFormContext } from "react-hook-form";

function StepOrigin() {
  const { formState: { errors }, register } = useFormContext();

  return (
    <div className="flex-grow-1 flex-shrink-0 border-bottom border-2 border-dark">
      <input type="text" 
        className={`bg-transparent border-0 ${errors.origin ? "is-invalid" : ""}` }
        placeholder="Origin"
        {...register( "origin", { required: "A origin is required" })}
      />
      { errors.origin && (
        <div className="invalid-feedback">{errors.origin.message}</div>
      )}
      <button type="submit">Next</button>
    </div>
  )  
};

export default StepOrigin;
