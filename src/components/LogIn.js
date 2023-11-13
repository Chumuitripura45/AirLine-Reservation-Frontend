// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// function Login({ onLogin }) {
//   const API_BASE_URL = "http://localhost:5088/api/Users/";

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios.get(`${API_BASE_URL}`, formData)  
//       .then((response) => {
//         toast.success("Login successful");
//         console.log("Login successful:", response.data);
//         onLogin(response.data.username);
//       })
//       .catch((error) => {
//         toast.error("Error logging in:" + error.message);
//         console.error("Error logging in:", error);
//       })
//   };

//   return (
//     <>
//       <ToastContainer />
//       <section className="" style={{ backgroundColor: "#eee", height: '50px' }}>
//         <div className="container h-50">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div style={{width : '85%', height: '0%'}}>
//               <div className="card text-black" style={{ borderRadius: "40px" }}>
//                 <div className="card-body p-md-5">
//                   <div className="row justify-content-center">
//                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Sign in
//                       </p>

//                       <form className="mx-1 mx-md-2" onSubmit={handleLogin}>
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <FontAwesomeIcon icon={faUser} className="fa-lg me-2 fa-fw" style={{ marginBottom: "-27px" }} />
//                           <div className="form-outline flex-fill mb-0">
//                             <label className="form-label">
//                               Username
//                             </label>
//                             <input
//                               type="text"
//                               name="username"
//                               value={formData.username}
//                               onChange={handleChange}
//                               className="form-control"
//                               required
//                             />
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <FontAwesomeIcon icon={faLock} className="fa-lg me-2 fa-fw" style={{ marginBottom: "-27px" }}/>
//                           <div className="form-outline flex-fill mb-0">
//                             <label className="form-label">
//                               Password
//                             </label>
//                             <input
//                               type="password"
//                               name="password"
//                               value={formData.password}
//                               onChange={handleChange}
//                               className="form-control"
//                               required
//                             />
//                           </div>
//                         </div>

//                         <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                           <button type="submit" className="btn btn-primary btn-lg">
//                             <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
//                             Sign In
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Login;


import React from 'react'

function LogIn() {
  return (
    <div>
      Chumui Tripura
    </div>
  )
}

export default LogIn
