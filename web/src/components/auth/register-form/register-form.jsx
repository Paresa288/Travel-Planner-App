import { useForm } from "react-hook-form"
import * as UsersApi from "../../../services/users-api";
import { useAuth } from "../../../contexts/auth";
import { useNavigate } from "react-router";

function RegisterForm() {
  const { register, handleSubmit, setError, formState: { errors, isValid }  } = useForm({ mode: "all" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmitRegister = async (user) => {
    try {
      await UsersApi.create(user);
      user = await UsersApi.login(user)
      login(user);
      navigate("/")
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
          "password",
          { type: "manual", message: err.message }
        );
      };
    }
  }

  return(
    <form onSubmit={handleSubmit(onSubmitRegister)}>
      {/* USERNAME */}
      <div className="input-group mb-1 shadow">
        <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
        <input type="text" 
          className={`form-control ${errors.username ? "is-invalid" : ""}` }
          placeholder="Username"
          {...register( "username", { required: "Username is required" })}
        />
        { errors.username && (
          <div className="invalid-feedback">{errors.username.message}</div>
        )}
      </div>

      {/* EMAIL */}
      <div className="input-group mb-1 shadow">
        <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
        <input 
          type="text" 
          className={`form-control ${errors.email ? "is-invalid" : ""}` } 
          placeholder="example@example.com" {...register("email", { required: "Email is required" })}
        />
        { errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      {/* BIRTHDATE */}
      <div className="input-group mb-1 shadow">
        <span className="input-group-text"><i className="fa fa-calendar fa-fw"></i></span>
        <input 
          type="date" 
          className={`form-control ${errors.birthDate ? "is-invalid" : ""}` } {...register("birthDate", { required: "Birth date is required" })}
        />
        { errors.birthDate && (
          <div className="invalid-feedback">{errors.birthDate.message}</div>
        )}
      </div>

      {/* PASSWORD */}
      <div className="input-group mb-1 shadow">
        <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
        <input 
          type="text" 
          className={`form-control ${errors.password ? "is-invalid" : ""}` } {...register("password", { required: "Password is required" })}
          placeholder="*******"
        />
        { errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>

      <button className="btn btn-dark w-100 shadow" type="submit" disabled={!isValid}>Register</button>
    </form>
  )
}

export default RegisterForm;