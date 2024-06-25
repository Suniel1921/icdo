// import React from "react";
// import SideMenu from "./SideMenu";
// import "../admin/staffs.css";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import toast from "react-hot-toast";
// import axios from "axios";

// const Staffs = () => {
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     position: Yup.string().required("Position is required"),
//     gender: Yup.string().required("gender is required"),
//     stafforBoardMember: Yup.string().required("stafforBoardMember is required"),
//     image: Yup.mixed().required("Image is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       position: "",
//       image: null,
//       gender : "",
//       stafforBoardMember: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const uploadingToastId = toast.loading(
//           "Uploading photo. Please wait..."
//         );

//         const formData = new FormData();
//         formData.append("name", values.name);
//         formData.append("position", values.position);
//         formData.append("image", values.image);
//         formData.append("gender", values.gender);
//         formData.append("stafforBoardMember", values.stafforBoardMember);

//         const response = await axios.post(
//           `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/uploadImg`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );


//         if (response.data.success) {
//           toast.dismiss(uploadingToastId);
//           toast.success(response.data.message);
//           formik.resetForm();
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         if (error.response) {
//           toast.error(error.response.data.message);
//         } else if (error.message) {
//           toast.error(error.message);
//         } else {
//           toast.error("Something went wrong.");
//         }
//       }
//     },
//   });

//   return (
//     <>
//       <div className="staff_container container">
//         <div className="sideMenuContainer">
//           <div className="sidemenu">
//             <SideMenu />
//           </div>
//           <form
//             className="form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               formik.handleSubmit();
//             }}
//           >
//           <h3>Add Your Team From Here</h3>
//             <input
//               onChange={(event) =>
//                 formik.setFieldValue("name", event.target.value)
//               }
//               value={formik.values.name}
//               onBlur={formik.handleBlur}
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Enter user name"
//             />
//             {formik.touched.name && formik.errors.name && (
//               <p className="errors">{formik.errors.name}</p>
//             )}

//             <input
//               onChange={(event) =>
//                 formik.setFieldValue("gender", event.target.value)
//               }
//               value={formik.values.gender}
//               onBlur={formik.handleBlur}
//               type="text"
//               name="gender"
//               id="gender"
//               placeholder="Enter user gender"
//             />
//             {formik.touched.gender && formik.errors.gender && (
//               <p className="errors">{formik.errors.gender}</p>
//             )}

//             <input
//               onChange={(event) =>
//                 formik.setFieldValue("position", event.target.value)
//               }
//               value={formik.values.position}
//               onBlur={formik.handleBlur}
//               type="text"
//               name="position"
//               id="position"
//               placeholder="Enter Position"
//             />
//             {formik.touched.position && formik.errors.position && (
//               <p className="errors">{formik.errors.position}</p>
//             )}
//             <input
//               onChange={(event) =>
//                 formik.setFieldValue("image", event.currentTarget.files[0])
//               }
//               type="file"
//               name="image"
//               accept="image/*"
//             />
//             {formik.values.image && (
//               <img
//                 src={URL.createObjectURL(formik.values.image)}
//                 alt="Preview"
//                 height={"100px"}
//               />
//             )}
// {/* ******************** */}
//             <input
//               onChange={(event) =>
//                 formik.setFieldValue("stafforBoardMember", event.target.value)
//               }
//               value={formik.values.stafforBoardMember}
//               onBlur={formik.handleBlur}
//               type="text"
//               name="stafforBoardMember"
//               id="stafforBoardMember"
//               placeholder="Enter staff or member"
//             />
//             {formik.touched.stafforBoardMember && formik.errors.stafforBoardMember && (
//               <p className="errors">{formik.errors.stafforBoardMember}</p>
//             )}

//             <button
//               className="register_btn"
//               type="submit"
//               disabled={
//                 formik.isSubmitting ||
//                 !(
//                   formik.values.name &&
//                   formik.values.position &&
//                   formik.values.image &&
//                   formik.values.stafforBoardMember
//                 )
//               }
//             >
//               {formik.isSubmitting ? "Uploading..." : "Submit"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Staffs;












import React from "react";
import SideMenu from "./SideMenu";
import "../admin/staffs.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";

const Staffs = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    position: Yup.string().required("Position is required"),
    gender: Yup.string().required("Gender is required"),
    stafforBoardMember: Yup.string().required("Role is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      image: null,
      gender: "",
      stafforBoardMember: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const uploadingToastId = toast.loading(
          "Uploading photo. Please wait..."
        );

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("position", values.position);
        formData.append("image", values.image);
        formData.append("gender", values.gender);
        formData.append("stafforBoardMember", values.stafforBoardMember);

        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/uploadImg`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          toast.dismiss(uploadingToastId);
          toast.success(response.data.message);
          formik.resetForm();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        if (error.response) {
          toast.error(error.response.data.message);
        } else if (error.message) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong.");
        }
      }
    },
  });

  return (
    <>
      <div className="staff_container container">
        <div className="sideMenuContainer">
          <div className="sidemenu">
            <SideMenu />
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <h3>Add Your Team From Here</h3>
            <input
              onChange={(event) =>
                formik.setFieldValue("name", event.target.value)
              }
              value={formik.values.name}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              id="name"
              placeholder="Enter user name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="errors">{formik.errors.name}</p>
            )}

            <input
              onChange={(event) =>
                formik.setFieldValue("gender", event.target.value)
              }
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              type="text"
              name="gender"
              id="gender"
              placeholder="Enter user gender"
            />
            {formik.touched.gender && formik.errors.gender && (
              <p className="errors">{formik.errors.gender}</p>
            )}

            <input
              onChange={(event) =>
                formik.setFieldValue("position", event.target.value)
              }
              value={formik.values.position}
              onBlur={formik.handleBlur}
              type="text"
              name="position"
              id="position"
              placeholder="Enter Position"
            />
            {formik.touched.position && formik.errors.position && (
              <p className="errors">{formik.errors.position}</p>
            )}
            <input
              onChange={(event) =>
                formik.setFieldValue("image", event.currentTarget.files[0])
              }
              type="file"
              name="image"
              accept="image/*"
            />
            {formik.values.image && (
              <img
                src={URL.createObjectURL(formik.values.image)}
                alt="Preview"
                height={"100px"}
              />
            )}

            <select
              onChange={(event) =>
                formik.setFieldValue("stafforBoardMember", event.target.value)
              }
              value={formik.values.stafforBoardMember}
              onBlur={formik.handleBlur}
              name="stafforBoardMember"
              id="stafforBoardMember"
            >
              <option value="" label="Select role" />
              <option value="staff" label="Staff" />
              <option value="board_member" label="Board Member" />
            </select>
            {formik.touched.stafforBoardMember &&
              formik.errors.stafforBoardMember && (
                <p className="errors">{formik.errors.stafforBoardMember}</p>
              )}

            <button
              className="register_btn staffBtn"
              type="submit"
              disabled={
                formik.isSubmitting ||
                !(
                  formik.values.name &&
                  formik.values.position &&
                  formik.values.image &&
                  formik.values.gender &&
                  formik.values.stafforBoardMember
                )
              }
            >
              {formik.isSubmitting ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Staffs;
