import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rating from "./components/Rating";
import Homevideo from "./components/Homevideo";
import Roomvideo from "./components/Roomvideo";
import StudentDashboard from "./student/StudentDashboard";


function App() {
  const handleRatingSubmit = (data) => {
    console.log('Submitted Rating:', data);
    // Send to backend or store in DB
  };

  return (
  
    <Router>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center bg-pink-500"
        style={{
          // backgroundImage:
          //   "url('https://static.vecteezy.com/system/resources/previews/002/791/593/non_2x/class-of-2019-graduarion-design-elements-empty-frame-with-education-background-illustration-free-vector.jpg')",

          backgroundImage:
            "url('https://img.freepik.com/free-photo/assortment-teacher-s-day-elements_23-2149044959.jpg?semt=ais_hybrid&w=740')",
        }}
      >
        <div className="flex items-center justify-center bg-gray-100">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/homevideo" element={<Homevideo />} />
            <Route path='/room/:roomID' element={<Roomvideo />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;







  

