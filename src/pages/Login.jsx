// import AuthForm from "../components/AuthForm";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
//       <AuthForm type="login" />
//       <p className="text-center text-sm">
//         Don't have an account?{" "}
//         <Link to="/signup" className="text-blue-500 hover:underline">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }



import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="w-300 h-100  max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
        <AuthForm type="login" />
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
