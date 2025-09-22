import { useFormContext } from "react-hook-form";

function StepTitle() {
  const { formState: { errors }, register } = useFormContext();

  return (
    <div className="flex-grow-1 flex-shrink-0 border-bottom border-2 border-dark">
      <input type="text" 
        className={`bg-transparent border-0 ${errors.title ? "is-invalid" : ""}` }
        placeholder="Title"
        {...register( "title", { required: "A title is required" })}
      />
      { errors.title && (
        <div className="invalid-feedback">{errors.title.message}</div>
      )}
      <button type="submit">Next</button>
    </div>
  )  
};

export default StepTitle;
