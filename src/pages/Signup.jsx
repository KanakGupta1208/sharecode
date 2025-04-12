// import AuthForm from "../components/AuthForm";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   return (
//     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-center">Create a New Account</h2>
//       <AuthForm type="signup" />
//       <p className="text-center text-sm">
//         Already have an account?{" "}
//         <Link to="/" className="text-blue-500 hover:underline">
//           Log in
//         </Link>
//       </p>
//     </div>
//   );
// }



import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="">
      <div className="w-400 h-130 max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center">Create a New Account</h2>
        <AuthForm type="signup" />
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
