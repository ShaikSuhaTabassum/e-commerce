// // // // import React, { useState, useEffect } from 'react'; // Import useEffect
// // // // import { useNavigate } from 'react-router-dom';
// // // // import './Login.css';

// // // // const AdminLoginSignup = () => {
// // // //   const [state, setState] = useState("Login");
// // // //   const [formData, setFormData] = useState({
// // // //     username: "",
// // // //     email: "",
// // // //     password: "",
// // // //   });
// // // //   const [errorMsg, setErrorMsg] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const ADMIN_LOGIN_API_URL = 'https://e-commerce-prt4.onrender.com/login';
// // // //   const ADMIN_SIGNUP_API_URL = 'https://e-commerce-prt4.onrender.com/signup';

// // // //   // Effect to check for existing admin token on component mount
// // // //   useEffect(() => {
// // // //     const adminToken = localStorage.getItem('admin-auth-token');
// // // //     if (adminToken) {
// // // //       // If a token exists, redirect to the admin dashboard
// // // //       navigate('/admin-dashboard'); // Ensure this route is defined in your router
// // // //     }
// // // //   }, [navigate]); // Dependency array includes navigate to avoid lint warnings

// // // //   const changeHandler = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //     setErrorMsg("");
// // // //   };

// // // //   const adminLogin = async () => {
// // // //     try {
// // // //       const response = await fetch(ADMIN_LOGIN_API_URL, {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Accept': 'application/json',
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           email: formData.email,
// // // //           password: formData.password,
// // // //         }),
// // // //       });

// // // //       const responseData = await response.json();

// // // //       if (responseData.success) {
// // // //         localStorage.setItem('admin-auth-token', responseData.token);
// // // //         navigate('/');
// // // //       } else {
// // // //         setErrorMsg(responseData.error || "Invalid admin email or password.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Admin Login error:", error);
// // // //       setErrorMsg("Network error. Please try again later.");
// // // //     }
// // // //   };

// // // //   const adminSignup = async () => {
// // // //     try {
// // // //       const response = await fetch(ADMIN_SIGNUP_API_URL, {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Accept': 'application/json',
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       const responseData = await response.json();

// // // //       if (responseData.success) {
// // // //         setState("Login");
// // // //         setErrorMsg("");
// // // //         setFormData({ username: "", email: "", password: "" });
// // // //       } else {
// // // //         setErrorMsg(responseData.error || "Admin signup failed. Please try again.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Admin Signup error:", error);
// // // //       setErrorMsg("Network error. Please try again later.");
// // // //     }
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (state === "Login") {
// // // //       adminLogin();
// // // //     } else {
// // // //       adminSignup();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className='admin-loginsignup'>
// // // //       <div className="admin-loginsignup-container">
// // // //         <h1>Admin {state}</h1>

// // // //         <form className="admin-loginsignup-fields" onSubmit={handleSubmit}>
// // // //           {state === 'Sign Up' && (
// // // //             <input
// // // //               name='username'
// // // //               value={formData.username}
// // // //               onChange={changeHandler}
// // // //               type="text"
// // // //               placeholder='Admin Name'
// // // //               required
// // // //             />
// // // //           )}
// // // //           <input
// // // //             name='email'
// // // //             value={formData.email}
// // // //             onChange={changeHandler}
// // // //             type="email"
// // // //             placeholder='Admin Email Address'
// // // //             required
// // // //           />
// // // //           <input
// // // //             name='password'
// // // //             value={formData.password}
// // // //             onChange={changeHandler}
// // // //             type="password"
// // // //             placeholder='Admin Password'
// // // //             required
// // // //           />

// // // //           {errorMsg && <p className="admin-error-msg">{errorMsg}</p>}

// // // //           <div className='admin-login-btn-container'>
// // // //             <button type="submit" className='admin-login-btn'>
// // // //               {state === 'Login' ? 'Login' : 'Sign Up'}
// // // //             </button>
// // // //           </div>
// // // //         </form>

// // // //         {state === 'Sign Up' ? (
// // // //           <p className='admin-loginsignup-login'>
// // // //             Already have an admin account?{" "}
// // // //             <span onClick={() => { setState("Login"); setErrorMsg(""); }}>
// // // //               Login here
// // // //             </span>
// // // //           </p>
// // // //         ) : (
// // // //           <p className='admin-loginsignup-login'>
// // // //             Create an admin account?{" "}
// // // //             <span onClick={() => { setState("Sign Up"); setErrorMsg(""); }}>
// // // //               Click here
// // // //             </span>
// // // //           </p>
// // // //         )}

// // // //         <div className="admin-loginsignup-agree">
// // // //           <input type="checkbox" id='admin-agree' />
// // // //           <p>By continuing as an admin, I agree to the Admin Terms & Policies.</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminLoginSignup;
// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './Login.css'; // Assuming your CSS is in this file

// // // const AdminLoginSignup = () => {
// // //   const [state, setState] = useState("Login");
// // //   const [formData, setFormData] = useState({
// // //     username: "",
// // //     email: "",
// // //     password: "",
// // //   });
// // //   const [errorMsg, setErrorMsg] = useState("");
// // //   const [agreedToTerms, setAgreedToTerms] = useState(false);
// // //   // New state to track if a submission attempt has been made
// // //   const [submissionAttempted, setSubmissionAttempted] = useState(false);
// // //   const navigate = useNavigate();

// // //   const ADMIN_LOGIN_API_URL = 'https://e-commerce-prt4.onrender.com/login';
// // //   const ADMIN_SIGNUP_API_URL = 'https://e-commerce-prt4.onrender.com/signup';

// // //   useEffect(() => {
// // //     const adminToken = localStorage.getItem('admin-auth-token');
// // //     if (adminToken) {
// // //       navigate('/admin-dashboard');
// // //     }
// // //   }, [navigate]);

// // //   const changeHandler = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     setErrorMsg("");
// // //     // Optionally reset submissionAttempted if user starts typing again
// // //     // setSubmissionAttempted(false);
// // //   };

// // //   const handleCheckboxChange = (e) => {
// // //     setAgreedToTerms(e.target.checked);
// // //     // Hide the message if they now agree
// // //     if (e.target.checked) {
// // //       setSubmissionAttempted(false); // Reset attempt if they check the box
// // //     }
// // //   };

// // //   const adminLogin = async () => {
// // //     try {
// // //       const response = await fetch(ADMIN_LOGIN_API_URL, {
// // //         method: 'POST',
// // //         headers: {
// // //           'Accept': 'application/json',
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({
// // //           email: formData.email,
// // //           password: formData.password,
// // //         }),
// // //       });

// // //       const responseData = await response.json();

// // //       if (responseData.success) {
// // //         localStorage.setItem('admin-auth-token', responseData.token);
// // //         navigate('/admin-dashboard');
// // //       } else {
// // //         setErrorMsg(responseData.error || "Invalid admin email or password.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Admin Login error:", error);
// // //       setErrorMsg("Network error. Please try again later.");
// // //     }
// // //   };

// // //   const adminSignup = async () => {
// // //     try {
// // //       const response = await fetch(ADMIN_SIGNUP_API_URL, {
// // //         method: 'POST',
// // //         headers: {
// // //           'Accept': 'application/json',
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       const responseData = await response.json();

// // //       if (responseData.success) {
// // //         setState("Login");
// // //         setErrorMsg("");
// // //         setFormData({ username: "", email: "", password: "" });
// // //         setAgreedToTerms(false);
// // //         setSubmissionAttempted(false); // Reset on successful signup
// // //         alert("Admin account created successfully! Please log in.");
// // //       } else {
// // //         setErrorMsg(responseData.error || "Admin signup failed. Please try again.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Admin Signup error:", error);
// // //       setErrorMsg("Network error. Please try again later.");
// // //     }
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setSubmissionAttempted(true); // Mark that a submission attempt has occurred

// // //     if (!agreedToTerms) {
// // //       // No need to set errorMsg here explicitly as the message below the checkbox handles it
// // //       return; // Stop the function if terms are not agreed
// // //     }

// // //     if (state === "Login") {
// // //       adminLogin();
// // //     } else {
// // //       adminSignup();
// // //     }
// // //   };

// // //   // Function to handle click on the disabled button area (optional, for better UX)
// // //   // This helps trigger the message even if the button itself can't be clicked
// // //   const handleDisabledButtonClick = (e) => {
// // //     if (!agreedToTerms) {
// // //       setSubmissionAttempted(true); // Trigger message if they try to click disabled button
// // //     }
// // //   };

// // //   return (
// // //     <div className='admin-loginsignup'>
// // //       <div className="admin-loginsignup-container">
// // //         <h1>Admin {state}</h1>

// // //         <form className="admin-loginsignup-fields" onSubmit={handleSubmit}>
// // //           {state === 'Sign Up' && (
// // //             <input
// // //               name='username'
// // //               value={formData.username}
// // //               onChange={changeHandler}
// // //               type="text"
// // //               placeholder='Admin Name'
// // //               required
// // //             />
// // //           )}
// // //           <input
// // //             name='email'
// // //             value={formData.email}
// // //             onChange={changeHandler}
// // //             type="email"
// // //             placeholder='Admin Email Address'
// // //             required
// // //           />
// // //           <input
// // //             name='password'
// // //             value={formData.password}
// // //             onChange={changeHandler}
// // //             type="password"
// // //             placeholder='Admin Password'
// // //             required
// // //           />

// // //           {errorMsg && <p className="admin-error-msg">{errorMsg}</p>}

// // //           <div className="admin-loginsignup-agree">
// // //             <input
// // //               type="checkbox"
// // //               id='admin-agree'
// // //               checked={agreedToTerms}
// // //               onChange={handleCheckboxChange}
// // //             />
// // //             <p>By continuing as an admin, I agree to the Admin Terms & Policies.</p>
// // //           </div>

// // //           {/* Show the terms message if a submission was attempted AND terms are NOT agreed */}
// // //           {submissionAttempted && !agreedToTerms && (
// // //             <p className="admin-terms-message" style={{ color: 'red', fontSize: '0.85em', marginTop: '5px', textAlign: 'left' }}>
// // //               Please agree to the terms and policies to proceed.
// // //             </p>
// // //           )}

// // //           <div className='admin-login-btn-container' onClick={handleDisabledButtonClick}> {/* Add onClick to parent */}
// // //             <button
// // //               type="submit"
// // //               className='admin-login-btn'
// // //               disabled={!agreedToTerms}
// // //             >
// // //               {state === 'Login' ? 'Login' : 'Sign Up'}
// // //             </button>
// // //           </div>
// // //           {submissionAttempted && !agreedToTerms && (
// // //   <p className="admin-terms-message" style={{ color: 'red', fontSize: '0.85em', marginTop: '5px', textAlign: 'left' }}>
// // //     Please agree to the terms and policies to proceed.
// // //   </p>
// // // )}

// // //         </form>
        

// // //         {state === 'Sign Up' ? (
// // //           <p className='admin-loginsignup-login'>
// // //             Already have an admin account?{" "}
// // //             <span onClick={() => {
// // //               setState("Login");
// // //               setErrorMsg("");
// // //               setAgreedToTerms(false);
// // //               setSubmissionAttempted(false); // Reset on state change
// // //             }}>
// // //               Login here
// // //             </span>
// // //           </p>
// // //         ) : (
// // //           <p className='admin-loginsignup-login'>
// // //             Create an admin account?{" "}
// // //             <span onClick={() => {
// // //               setState("Sign Up");
// // //               setErrorMsg("");
// // //               setAgreedToTerms(false);
// // //               setSubmissionAttempted(false); // Reset on state change
// // //             }}>
// // //               Click here
// // //             </span>
// // //           </p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminLoginSignup;
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Login.css'; // Ensure this path is correct

// // const AdminLoginSignup = () => {
// //   const [state, setState] = useState("Login");
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [errorMsg, setErrorMsg] = useState("");
// //   const [agreedToTerms, setAgreedToTerms] = useState(false);
// //   const [submissionAttempted, setSubmissionAttempted] = useState(false);
// //   const navigate = useNavigate();

// //   const ADMIN_LOGIN_API_URL = 'https://e-commerce-prt4.onrender.com/login';
// //   const ADMIN_SIGNUP_API_URL = 'https://e-commerce-prt4.onrender.com/signup';

// //   useEffect(() => {
// //     const adminToken = localStorage.getItem('admin-auth-token');
// //     if (adminToken) {
// //       navigate('/admin-dashboard');
// //     }
// //   }, [navigate]);

// //   const changeHandler = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setErrorMsg("");
// //   };

// //   const handleCheckboxChange = (e) => {
// //     setAgreedToTerms(e.target.checked);
// //     if (e.target.checked) {
// //       setSubmissionAttempted(false);
// //     }
// //   };

// //   const adminLogin = async () => {
// //     try {
// //       const response = await fetch(ADMIN_LOGIN_API_URL, {
// //         method: 'POST',
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email: formData.email,
// //           password: formData.password,
// //         }),
// //       });

// //       const responseData = await response.json();

// //       if (responseData.success) {
// //         localStorage.setItem('admin-auth-token', responseData.token);
// //         navigate('/admin-dashboard');
// //       } else {
// //         setErrorMsg(responseData.error || "Invalid admin email or password.");
// //       }
// //     } catch (error) {
// //       console.error("Admin Login error:", error);
// //       setErrorMsg("Network error. Please try again later.");
// //     }
// //   };

// //   const adminSignup = async () => {
// //     try {
// //       const response = await fetch(ADMIN_SIGNUP_API_URL, {
// //         method: 'POST',
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       const responseData = await response.json();

// //       if (responseData.success) {
// //         setState("Login");
// //         setErrorMsg("");
// //         setFormData({ username: "", email: "", password: "" });
// //         setAgreedToTerms(false);
// //         setSubmissionAttempted(false);
// //         alert("Admin account created successfully! Please log in.");
// //       } else {
// //         setErrorMsg(responseData.error || "Admin signup failed. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Admin Signup error:", error);
// //       setErrorMsg("Network error. Please try again later.");
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmissionAttempted(true);

// //     if (!agreedToTerms) return;

// //     if (state === "Login") {
// //       adminLogin();
// //     } else {
// //       adminSignup();
// //     }
// //   };

// //   return (
// //     <div className='admin-loginsignup'>
// //       <div className="admin-loginsignup-container">
// //         <h1>Admin {state}</h1>

// //         <form className="admin-loginsignup-fields" onSubmit={handleSubmit}>
// //           {state === 'Sign Up' && (
// //             <input
// //               name='username'
// //               value={formData.username}
// //               onChange={changeHandler}
// //               type="text"
// //               placeholder='Admin Name'
// //               required
// //             />
// //           )}
// //           <input
// //             name='email'
// //             value={formData.email}
// //             onChange={changeHandler}
// //             type="email"
// //             placeholder='Admin Email Address'
// //             required
// //           />
// //           <input
// //             name='password'
// //             value={formData.password}
// //             onChange={changeHandler}
// //             type="password"
// //             placeholder='Admin Password'
// //             required
// //           />

// //           {errorMsg && (
// //             <p className="admin-error-msg">{errorMsg}</p>
// //           )}

// //           <div className="admin-loginsignup-agree">
// //             <input
// //               type="checkbox"
// //               id='admin-agree'
// //               checked={agreedToTerms}
// //               onChange={handleCheckboxChange}
// //             />
// //             <p>By continuing as an admin, I agree to the Admin Terms & Policies.</p>
// //           </div>

// //           <div className='admin-login-btn-container'>
// //             <button
// //               type="submit"
// //               className='admin-login-btn'
// //               disabled={!agreedToTerms}
// //               onClick={() => {
// //                 if (!agreedToTerms) {
// //                   setSubmissionAttempted(true);
// //                 }
// //               }}
// //             >
// //               {state === 'Login' ? 'Login' : 'Sign Up'}
// //             </button>
// //           </div>

// //           {submissionAttempted && !agreedToTerms && (
// //             <p className="admin-terms-message" style={{
// //               color: 'red',
// //               fontSize: '0.85em',
// //               marginTop: '5px',
// //               textAlign: 'left'
// //             }}>
// //               Please agree to the terms and policies to proceed.
// //             </p>
// //           )}
// //         </form>

// //         {state === 'Sign Up' ? (
// //           <p className='admin-loginsignup-login'>
// //             Already have an admin account?{" "}
// //             <span onClick={() => {
// //               setState("Login");
// //               setErrorMsg("");
// //               setAgreedToTerms(false);
// //               setSubmissionAttempted(false);
// //             }}>
// //               Login here
// //             </span>
// //           </p>
// //         ) : (
// //           <p className='admin-loginsignup-login'>
// //             Create an admin account?{" "}
// //             <span onClick={() => {
// //               setState("Sign Up");
// //               setErrorMsg("");
// //               setAgreedToTerms(false);
// //               setSubmissionAttempted(false);
// //             }}>
// //               Click here
// //             </span>
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLoginSignup;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Make sure your CSS file exists and is styled properly

// const AdminLoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [submissionAttempted, setSubmissionAttempted] = useState(false);
//   const navigate = useNavigate();

//   const ADMIN_LOGIN_API_URL = 'https://e-commerce-prt4.onrender.com/login';
//   const ADMIN_SIGNUP_API_URL = 'https://e-commerce-prt4.onrender.com/signup';

//   useEffect(() => {
//     const adminToken = localStorage.getItem('admin-auth-token');
//     if (adminToken) {
//       navigate('/admin-dashboard');
//     }
//   }, [navigate]);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrorMsg("");
//   };

//   const handleCheckboxChange = (e) => {
//     setAgreedToTerms(e.target.checked);
//     if (e.target.checked) {
//       setSubmissionAttempted(false);
//     }
//   };

//   const adminLogin = async () => {
//     try {
//       const response = await fetch(ADMIN_LOGIN_API_URL, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const responseData = await response.json();

//       if (responseData.success) {
//         localStorage.setItem('admin-auth-token', responseData.token);
//         navigate('/admin-dashboard');
//       } else {
//         setErrorMsg(responseData.error || "Invalid admin email or password.");
//       }
//     } catch (error) {
//       console.error("Admin Login error:", error);
//       setErrorMsg("Network error. Please try again later.");
//     }
//   };

//   const adminSignup = async () => {
//     try {
//       const response = await fetch(ADMIN_SIGNUP_API_URL, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const responseData = await response.json();

//       if (responseData.success) {
//         setState("Login");
//         setErrorMsg("");
//         setFormData({ username: "", email: "", password: "" });
//         setAgreedToTerms(false);
//         setSubmissionAttempted(false);
//         alert("Admin account created successfully! Please log in.");
//       } else {
//         setErrorMsg(responseData.error || "Admin signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Admin Signup error:", error);
//       setErrorMsg("Network error. Please try again later.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmissionAttempted(true);

//     if (!agreedToTerms) return;

//     if (state === "Login") {
//       adminLogin();
//     } else {
//       adminSignup();
//     }
//   };

//   return (
//     <div className='admin-loginsignup'>
//       <div className="admin-loginsignup-container">
//         <h1>Admin {state}</h1>

//         <form className="admin-loginsignup-fields" onSubmit={handleSubmit}>
//           {state === 'Sign Up' && (
//             <input
//               name='username'
//               value={formData.username}
//               onChange={changeHandler}
//               type="text"
//               placeholder='Admin Name'
//               required
//             />
//           )}
//           <input
//             name='email'
//             value={formData.email}
//             onChange={changeHandler}
//             type="email"
//             placeholder='Admin Email Address'
//             required
//           />
//           <input
//             name='password'
//             value={formData.password}
//             onChange={changeHandler}
//             type="password"
//             placeholder='Admin Password'
//             required
//           />

//           {errorMsg && (
//             <p className="admin-error-msg">{errorMsg}</p>
//           )}

//           <div className="admin-loginsignup-agree">
//             <input
//               type="checkbox"
//               id='admin-agree'
//               checked={agreedToTerms}
//               onChange={handleCheckboxChange}
//             />
//             <p>By continuing as an admin, I agree to the Admin Terms & Policies.</p>
//           </div>

//           {/* ✅ Wrapper catches click even if button is disabled */}
//           <div
//             className='admin-login-btn-container'
//             onClick={() => {
//               if (!agreedToTerms) {
//                 setSubmissionAttempted(true);
//               }
//             }}
//           >
//             <button
//               type="submit"
//               className='admin-login-btn'
//               disabled={!agreedToTerms}
//             >
//               {state === 'Login' ? 'Login' : 'Sign Up'}
//             </button>
//           </div>

//           {/* ✅ Error message when trying to submit without agreeing */}
//           {submissionAttempted && !agreedToTerms && (
//             <p className="admin-terms-message" style={{
//               color: 'red',
//               fontSize: '0.85em',
//               marginTop: '5px',
//               textAlign: 'left'
//             }}>
//               Please agree to the terms and policies to proceed.
//             </p>
//           )}
//         </form>

//         {state === 'Sign Up' ? (
//           <p className='admin-loginsignup-login'>
//             Already have an admin account?{" "}
//             <span onClick={() => {
//               setState("Login");
//               setErrorMsg("");
//               setAgreedToTerms(false);
//               setSubmissionAttempted(false);
//             }}>
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p className='admin-loginsignup-login'>
//             Create an admin account?{" "}
//             <span onClick={() => {
//               setState("Sign Up");
//               setErrorMsg("");
//               setAgreedToTerms(false);
//               setSubmissionAttempted(false);
//             }}>
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminLoginSignup;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const AdminLoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const navigate = useNavigate();

  const ADMIN_LOGIN_API_URL = 'https://e-commerce-prt4.onrender.com/login';
  const ADMIN_SIGNUP_API_URL = 'https://e-commerce-prt4.onrender.com/signup';

  useEffect(() => {
    const adminToken = localStorage.getItem('admin-auth-token');
    if (adminToken) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
    if (e.target.checked) {
      setSubmissionAttempted(false);
    }
  };

  const adminLogin = async () => {
    try {
      const response = await fetch(ADMIN_LOGIN_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('admin-auth-token', responseData.token);
        navigate('/');
      } else {
        setErrorMsg(responseData.error || "Invalid admin email or password.");
      }
    } catch (error) {
      console.error("Admin Login error:", error);
      setErrorMsg("Network error. Please try again later.");
    }
  };

  const adminSignup = async () => {
    try {
      const response = await fetch(ADMIN_SIGNUP_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        setState("Login");
        setErrorMsg("");
        setFormData({ username: "", email: "", password: "" });
        setAgreedToTerms(false);
        setSubmissionAttempted(false);
        alert("Admin account created successfully! Please log in.");
      } else {
        setErrorMsg(responseData.error || "Admin signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Admin Signup error:", error);
      setErrorMsg("Network error. Please try again later.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionAttempted(true);

    if (!agreedToTerms) return;

    if (state === "Login") {
      adminLogin();
    } else {
      adminSignup();
    }
  };

  return (
    <div className='admin-loginsignup'>
      <div className="admin-loginsignup-container">
        <h1>Admin {state}</h1>

        <form className="admin-loginsignup-fields" onSubmit={handleSubmit}>
          {state === 'Sign Up' && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder='Admin Name'
              required
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Admin Email Address'
            required
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Admin Password'
            required
          />

          {errorMsg && (
            <p className="admin-error-msg">{errorMsg}</p>
          )}

          <div className="admin-loginsignup-agree">
            <input
              type="checkbox"
              id='admin-agree'
              checked={agreedToTerms}
              onChange={handleCheckboxChange}
            />
            <p>By continuing as an admin, I agree to the Admin Terms & Policies.</p>
          </div>

          <div className='admin-login-btn-container'>
            <button type="submit" className='admin-login-btn'>
              {state === 'Login' ? 'Login' : 'Sign Up'}
            </button>
          </div>

          {submissionAttempted && !agreedToTerms && (
            <p className="admin-terms-message" style={{
              color: 'red',
              fontSize: '0.85em',
              marginTop: '5px',
              textAlign: 'left'
            }}>
              Please agree to the terms and policies to proceed.
            </p>
          )}
        </form>

        {state === 'Sign Up' ? (
          <p className='admin-loginsignup-login'>
            Already have an admin account?{" "}
            <span onClick={() => {
              setState("Login");
              setErrorMsg("");
              setAgreedToTerms(false);
              setSubmissionAttempted(false);
            }}>
              Login here
            </span>
          </p>
        ) : (
          <p className='admin-loginsignup-login'>
            Create an admin account?{" "}
            <span onClick={() => {
              setState("Sign Up");
              setErrorMsg("");
              setAgreedToTerms(false);
              setSubmissionAttempted(false);
            }}>
              Click here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminLoginSignup;
