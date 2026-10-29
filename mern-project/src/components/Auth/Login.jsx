import useState from "react";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleDubmit = (e) => {
        e.preventDefault();
        console.log("email:", email, "password:", password);
        //to make form empty after submission
        setEmail("");
        setPassword("");
    };
  return (
    <>
      <div className="flex flex-col items-center justify-content">
        Login or Sign Up
      </div>
      <div className="flex flex-col items-center justify-content h-screen w-screen">
        <form className="flex flex-col items-center justify-content h-screen w-screen" 
        onSubmit={(e) => handleDubmit(e)}>
            {/* while submitting we get something (eventlistener)and we send it to submithandler in form of e */}
          <input
            className="border-2 border-red rounded-full "
            required
            type="email"
            placeholder="  enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 border-red rounded-full"
            required
            type="password"
            placeholder="  password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border-2 border-red py-2 px-4 rounded-full"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
// onChange (me likh rha hu to change kon detect krega)
// An event handler that runs when the input's value changes.
// (e) =>
// An arrow function that receives an event object. Here, e represents the input change event.
// e.target
// The HTML element that triggered the event — in this case, your input field.
// e.target.value
// The current text inside that input field.
// setPassword(e.target.value)
// Updates the React state with the text the user entered.
//value = {password}  , is what react rerenders 