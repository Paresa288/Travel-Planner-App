import { useFormContext } from "react-hook-form";

function StepStartedAt() {
  const { formState: { errors }, register } = useFormContext();

  return (
    <div className="flex-grow-1 flex-shrink-0 border-bottom border-2 border-dark">
      <input type="text" 
        className={`bg-transparent border-0 ${errors.startedAt ? "is-invalid" : ""}` }
        placeholder="Started At"
        {...register("startedAt", { required: "A startedAt is required" })}
      />
      { errors.startedAt && (
        <div className="invalid-feedback">{ errors.startedAt.message }</div>
      )}
      <button type="submit">Next</button>
    </div>
  )  
};

export default StepStartedAt;
