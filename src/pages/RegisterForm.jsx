import { useState } from "react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const [submittedData, setSubmittedData] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
    reset();
  };

  return (
    <div className=" max-w-screen-lg mx-auto p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* =================== First Name Field ========================= */}
        <label htmlFor="firstName">First Name: </label>
        <input
          className="rounded-md px-2 py-1 focus:outline-none border border-slate-800"
          id="firstName"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert" style={{ color: "red" }}>
            First name is required
          </p>
        )}
        {errors.firstName?.type === "maxLength" && (
          <p role="alert" style={{ color: "red" }}>
            First name cannot exceed 20 characters
          </p>
        )}
        <br /> <br />
        {/* ================== Last Name Field ================= */}
        <label htmlFor="lastName">Last Name: </label>
        <input
          className="rounded-md px-2 py-1 focus:outline-none border border-slate-800"
          id="lastName"
          {...register("lastName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert" style={{ color: "red" }}>
            Last name is required
          </p>
        )}
        {errors.lastName?.type === "pattern" && (
          <p role="alert" style={{ color: "red" }}>
            Last name must only contain letters
          </p>
        )}
        <br /> <br />
        {/* ======================= Email Field ================ */}
        <label htmlFor="email">Email: </label>
        <input
          className="rounded-md px-2 py-1 focus:outline-none border border-slate-800"
          id="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
        />
        {errors.email?.type === "required" && (
          <p role="alert" style={{ color: "red" }}>
            Email is required
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p role="alert" style={{ color: "red" }}>
            Enter a valid email address
          </p>
        )}
        <br /> <br />
        {/* =====================  Multiple Checkbox Example ======================= */}
        <fieldset>
          <legend>Select your hobbies:</legend>
          <label>
            <input type="checkbox" value="Reading" {...register("hobbies")} />
            Reading
          </label>
          <br />
          <label>
            <input type="checkbox" value="Traveling" {...register("hobbies")} />
            Traveling
          </label>
          <br />
          <label>
            <input type="checkbox" value="Gaming" {...register("hobbies")} />
            Gaming
          </label>
        </fieldset>
        <br />
        {/* ================= Dropdown Field ========================= */}
        <label htmlFor="country">Country: </label>
        <select
          className="rounded-md px-2 py-1 focus:outline-none border border-slate-800"
          id="country"
          {...register("country", { required: true })}
        >
          <option value="">Select a country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country?.type === "required" && (
          <p role="alert" style={{ color: "red" }}>
            Please select a country
          </p>
        )}
        <br /> <br />
        {/* ================== Age Field ====================== */}
        <label htmlFor="age">Age: </label>
        <input
          className="rounded-md px-2 py-1 focus:outline-none border border-slate-800"
          id="age"
          type="number"
          {...register("age", { required: true, min: 18, max: 99 })}
        />
        {errors.age?.type === "required" && (
          <p role="alert" style={{ color: "red" }}>
            Age is required
          </p>
        )}
        {errors.age?.type === "min" && (
          <p role="alert" style={{ color: "red" }}>
            Age must be at least 18
          </p>
        )}
        {errors.age?.type === "max" && (
          <p role="alert" style={{ color: "red" }}>
            Age must be less than 99
          </p>
        )}
        <br /> <br />
        {/* ===================== Checkbox Field ======================= */}
        <label htmlFor="terms">
          <input
            className="rounded-md px-2 py-1 focus:outline-none border border-slate-800"
            id="terms"
            type="checkbox"
            {...register("terms", { required: true })}
          />{" "}
          I agree to the terms and conditions
        </label>
        {errors.terms?.type === "required" && (
          <p role="alert" style={{ color: "red" }}>
            You must agree to the terms and conditions
          </p>
        )}
        <br /> <br />
        {/* ================== Submit Button ================ */}
        <input
          className="bg-teal-800 text-white rounded-md px-4 py-2"
          type="submit"
        />
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.firstName} {submittedData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Country:</strong> {submittedData.country}
          </p>
          <p>
            <strong>Hobby:</strong> {submittedData.hobbies}
          </p>
          <p>
            <strong>Age:</strong> {submittedData.age}
          </p>
        </div>
      )}
    </div>
  );
};
