import { useFormContext } from "react-hook-form";

function StepFinishedAt() {
  const { formState: { errors }, register } = useFormContext();

  return (
    <div className="flex-grow-1 flex-shrink-0 border-bottom border-2 border-dark">
      <input type="text" 
        className={`bg-transparent border-0 ${errors.finishedAt ? "is-invalid" : ""}` }
        placeholder="Finished At"
        {...register("finishedAt", { required: "A finishedAt is required" })}
      />
      { errors.finishedAt && (
        <div className="invalid-feedback">{ errors.finishedAt.message }</div>
      )}
      <button type="submit">Next</button>
    </div>
  )  
};

export default StepFinishedAt;
