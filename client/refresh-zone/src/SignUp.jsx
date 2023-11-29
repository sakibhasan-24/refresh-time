import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

export default function SignUp() {
  const { createUser } = useContext(AuthContext);
  const handleFormData = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((data) => {
        console.log(data.user);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-4xl text-center my-6">Please SignUp</h1>
      <form
        onSubmit={handleFormData}
        className="bg-slate-300 px-4 py-6 rounded-md flex flex-col space-y-6"
      >
        <input
          className="rounded-lg px-4 py-3 w-3/4 mx-auto border-0 active:border-sky-500 "
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="rounded-lg px-4 py-3 w-3/4 mx-auto border-0 active:border-sky-500 "
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <input
          className="bg-blue-700 px-4 py-3 font-semibold rounded-md w-1/2 mx-auto cursor-pointer"
          type="submit"
          value="SignUp"
        />
      </form>
    </div>
  );
}
