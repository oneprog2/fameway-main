// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import styles from "./login.module.scss";
// import { useAuth } from "../../api/authProvider";

// interface ILoginFormInput {
//   username: string;
//   password: string;
// }

// const LoginSchema = yup.object().shape({
//   username: yup.string().required("Please enter your email address."),
//   password: yup.string().required("Please enter your password."),
// });

// export default function Login() {
//   const [authError, setAuthError] = useState(null);
//   const validationOpt = { resolver: yupResolver(LoginSchema) };
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm < ILoginFormInput > validationOpt;

//   const {
//     loginWithUsernamePassword,
//     loginWithGoogle,
//     loginWithFacebook,
//     existingUserError,
//     setExistingError,
//   } = useAuth();

//   async function onSubmit(data: ILoginFormInput) {
//     try {
//       await loginWithUsernamePassword(data.username, data.password);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <div>
//       <main id={styles.container}>
//         <div>
//           <h1 id={styles.header}>Login</h1>
//         </div>
//         <div id={styles.socialWrapper}>
//           <button
//             type="button"
//             id={styles.google}
//             onClick={async (e) => {
//               e.preventDefault();
//               loginWithGoogle();
//             }}
//           >
//             Login with Google
//           </button>

//           <button
//             type="button"
//             id={styles.facebook}
//             onClick={async (e) => {
//               e.preventDefault();
//               loginWithFacebook();
//             }}
//           >
//             Login with Facebook
//           </button>
//           {existingUserError && (
//             <span className={styles.errorMessage}>
//               This email address may be linked to another login method, try
//               again using your email and password below.
//             </span>
//           )}
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} id={styles.loginForm}>
//           <label htmlFor="username">
//             <input
//               type="email"
//               {...register("username", {
//                 onChange: () => {
//                   setExistingError(false);
//                 },
//               })}
//               placeholder="Email"
//               name="username"
//               id="username"
//               autoComplete="username"
//               className={
//                 authError || errors.username ? styles.inputWithError : ""
//               }
//             />
//           </label>
//           <label htmlFor="password">
//             <input
//               type="password"
//               {...register("password", {
//                 onChange: () => {
//                   setExistingError(false);
//                 },
//               })}
//               placeholder="Password"
//               name="password"
//               id="password"
//               autoComplete="current-password"
//               className={
//                 authError || errors.password ? styles.inputWithError : ""
//               }
//             />
//           </label>

//           {authError && <p id={styles.authError}>{authError}</p>}
//           {errors.username && (
//             <p id={styles.authError}>{errors.username.message}</p>
//           )}
//           {errors.password && (
//             <p id={styles.authError}>{errors.password.message}</p>
//           )}
//           <button
//             type="submit"
//             className={authError ? styles.submitWithError : ""}
//           >
//             Log in
//           </button>
//         </form>
//         <div id={styles.forgotPasswordWrapper}>
//           <button
//             type="button"
//             className="link-button"
//             onClick={(e) => {
//               e.preventDefault();
//             }}
//           >
//             Forgot your password?
//           </button>
//         </div>
//         <div id={styles.registrationWrapper}>
//           <p>
//             Don't have an account?
//             <button
//               type="button"
//               className="link-button"
//               onClick={(e) => {
//                 e.preventDefault();
//               }}
//             >
//               Register an account
//             </button>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }
