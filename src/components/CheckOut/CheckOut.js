import { Formik } from "formik";
import React from "react";

const CheckOut = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="display-3 text-success  text-center m-4">
            CheckOut Form
          </h1>
        </div>
        <div className="container">
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              billingAddress: "",
              deliverAddress: "",
              telephoneNumber: "",
              currentDate: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.name) {
                errors.name = "required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <b className="display-6">Full Name : </b>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="form-control mt-3 bg-light"
                />
                {/* {errors.name && touched.name && errors.name} */}
                <br />
                <b className="display-6">Billing Address : </b>
                <input
                  type="text"
                  name="billingAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billingAddress}
                  className="form-control mt-3 bg-light"
                />
                <br />
                <b className="display-6">Delivery Address : </b>
                <input
                  type="text"
                  name="deliverAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.deliverAddress}
                  className="form-control mt-3 bg-light"
                />
                <br />
                <b className="display-6">Telephone Number : </b>
                <input
                  type="number"
                  name="telephoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephoneNumber}
                  className="form-control mt-3 bg-light"
                />
                <br />
                <b className="display-6">Date : </b>
                <input
                  type="date"
                  name="currentDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentDate}
                  className="form-control mt-3 bg-light"
                />
                <br />
                <div className="d-flex justify-content-center ">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-outline-primary btn-lg "
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
