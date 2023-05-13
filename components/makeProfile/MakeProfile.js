import React, { useState, useMemo, useEffect } from "react";
import styles from "./MakeProfile.module.css";
import { useSelector, useDispatch } from "react-redux";
import createAxiosInstance from "../../pages/api/axios";

function MakeProfile() {
  const account = useSelector((state) => state.connect.account);
  const user = useSelector((state) => state.appState.user);
  const dispatch = useDispatch();

  console.log(user);

  const axios = useMemo(() => createAxiosInstance(), []);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let error = "";
    switch (name) {
      case "name":
        error = value ? "" : "Name is required";
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Email is not valid";
        }
        break;
      case "password":
        error = value ? "" : "Password is required";
        break;
      default:
        break;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};
    for (const [key, value] of Object.entries(inputs)) {
      switch (key) {
        case "username":
          newErrors[key] = value ? "" : "Username is required";
          break;
        case "email":
          if (!value) {
            newErrors[key] = "Email is required";
          } else if (!/^\S+@\S+\.\S+$/.test(value)) {
            newErrors[key] = "Email is not valid";
          }
          break;
        case "password":
          newErrors[key] = value ? "" : "Password is required";
          break;
        default:
          break;
      }
      if (newErrors[key]) {
        isValid = false;
      }
    }

    setErrors(newErrors);

    console.log(account);

    if (isValid) {
      const payload = { ...inputs, address: account };
      axios
        .post("/user/profile", payload)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e.response));
    }
  };
  useEffect(() => {
    setInputs({ username: user?.username ?? "", email: user?.email ?? "", password: "" });
  }, [user]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.makeProfileWrapper}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MakeProfile;

// import React, { useState, useEffect } from "react";
// import styles from "./MakeProfile.module.css";

// const MakeProfile = () => {
//   const [formData, setFormData] = useState({});
//   const [formData1, setFormData1] = useState({});
//   const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
//   const [formErrors, setFormErrors] = useState({});

//   new FormData();
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // if (!username) return setUsernameError("username is required");
//     // setUsernameError("");
//   };

//   // console.log(formErrors);

//   function handleDataChange(value, key) {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//     // setFormData1((prev) => ({ ...prev, [key]: true }));
//     setFormErrors((prev) => ({ ...prev, ...detectErrors(key, value) }));
//     // console.log(detectErrors(key, value));
//   }

//   function detectErrors(key, value) {
//     let errorsObj = {};
//     if (key === "username" && !value) {
//       errorsObj.username = "username is required";
//     }
//     const emailRegex = /\S+@\S+\.\S+/;
//     if (key === "email" && !emailRegex.test(value)) {
//       errorsObj.email = "enter valid email";
//     }
//     if (key === "email" && !value) {
//       errorsObj.email = "email is required";
//     }
//     return errorsObj;
//   }

//   // useEffect(() => {
//   //   if (!username) setUsernameError("username is required bitch");
//   // }, [username]);

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit} className={styles.makeProfileWrapper}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={formData.username ?? ""}
//           onChange={(e) => handleDataChange(e.target.value, "username")}
//           className={styles.input}
//         />
//         {formErrors.username ? <p>{formErrors.username}</p> : ""}
//         <input
// type="text"
// placeholder="Email"
// value={formData.email ?? ""}
// onChange={(e) => handleDataChange(e.target.value, "email")}
// className={styles.input}
//         />
//         {formErrors.email ? <p>{formErrors.email}</p> : ""}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MakeProfile;
