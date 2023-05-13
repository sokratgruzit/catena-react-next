import React, { useState, useMemo, useEffect } from "react";
import styles from "./MakeProfile.module.css";
import { useSelector, useDispatch } from "react-redux";
import createAxiosInstance from "../../pages/api/axios";
import PhoneNumberSelect from "./components/phoneNumberSelect/PhoneNumberSelect";
import FormSelectDate from "../voting/components/formDateInput/FormSelectDate";

function MakeProfile() {
  const account = useSelector((state) => state.connect.account);
  const user = useSelector((state) => state.appState.user);
  const dispatch = useDispatch();

  const [fileURL, setFIleURL] = useState("");
  const [file, setFile] = useState(null);

  // const handleSubmit = async () => {
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   axios.post("http://localhost:4000/upload-image", formData).then((res) => {
  //     console.log(res);
  //   });
  // };

  const axios = useMemo(() => createAxiosInstance(), []);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    mobile: "",
    dateOfBirth: new Date(),
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    mobile: "",
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

  function handleCustomUpdate(name, value) {
    handleInputChange({ target: { name: name, value } });
  }

  const handleFullMobileNumberChange = (value) => {
    handleInputChange({ target: { name: "mobile", value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};
    for (const [key, value] of Object.entries(inputs)) {
      switch (key) {
        case "fullname":
          newErrors[key] = value ? "" : "Fullname is required";
          break;
        case "email":
          if (!value) {
            newErrors[key] = "Email is required";
          } else if (!/^\S+@\S+\.\S+$/.test(value)) {
            newErrors[key] = "Email is not valid";
          }
          break;

        default:
          break;
      }
      if (newErrors[key]) {
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("address", account);
      formData.append("fullname", inputs.fullname);
      formData.append("email", inputs.email);
      formData.append("mobile", inputs.mobile);
      formData.append("dateOfBirth", inputs.dateOfBirth);

      console.log(formData);

      axios
        .post("/user/profile", formData)
        .then((res) => dispatch({ type: "SET_USER", payload: res.data.result }))
        .catch((e) => console.log(e.response));
    }
  };
  useEffect(() => {
    setInputs({
      fullname: user?.fullname ?? "",
      email: user?.email ?? "",
      mobile: user?.mobile ?? "",
      dateOfBirth: user?.dateOfBirth ? new Date(user?.dateOfBirth) : "",
    });
  }, [user]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.makeProfileWrapper}>
        <label>
          Fullname:
          <input
            type="text"
            name="fullname"
            value={inputs.fullname}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.fullname && <span className="error">{errors.fullname}</span>}
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
        <label className={styles.phoneNumberLabel}>
          Mobile Number (Optional)
          <PhoneNumberSelect
            handleFullMobileNumberChange={(value) => handleCustomUpdate("mobile", value)}
            value={inputs.mobile}
          />
        </label>
        <label className={styles.formSelectDateWrap}>
          Date Of Birth:
          <FormSelectDate
            placeholderText="YYYY/MM/DD"
            onChange={(date) => handleCustomUpdate("dateOfBirth", date)}
            selected={inputs.dateOfBirth}
            minDate={new Date("1900/01/01")}
            maxDate={new Date()}
          />
        </label>
        <label htmlFor="imageUploader" className={styles.uploader}>
          <span className={styles.label}>{""}</span>
          <div className={styles.uploadBtn}>Upload Image</div>
          <input
            type="file"
            name="image"
            id="imageUploader"
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e) => {
              setFIleURL(URL.createObjectURL(e.target.files[0]));
              setFile(e.target.files[0]);
              // setImageTitle(e.target.files[0]?.name);
              // getImageFile(e.target.files[0]);
            }}
          />
        </label>
        <div className={styles.imgOverview}>
          <img className={styles.preview} src={fileURL} alt="img" />
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
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
