import { useForm } from "react-hook-form";

export const BasicUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form
        
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="py-3 bg-slate-400 my-3"
          defaultValue="test"
          {...register("example")}
        />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="py-3 bg-slate-400 my-3"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="py-3 bg-slate-400 my-3" type="submit" />
      </form>
    </div>
  );
};
