import React, { useState } from "react";
import "../../App.scss";

const Filter = (props) => {
  const { setFilter } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  return (
    <>
      <div
        class="modal fade mt-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div class="modal-dialog mt-5">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Filter
              </h5>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setFilter(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body mt-3">
              <div>
                <b>Price</b>
                <br />
                <div className="mt-3 d-flex justify-content-around">
                  <input type="number" placeholder="Min" className="form-control"></input>
                  <b>-</b>
                  <input type="number" placeholder="Max" className="form-control"></input>
                </div>
              </div>
              <br />
              <div>
                <b>Date</b>
                <br />
                <input type="date" className="form-control mt-3" />
              </div>
              <br />
              <div>
                <b>Category</b>
                <div className="category">
                  <div class="dropdown mt-3">
                    {/* <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={toggleOpen}
                    >
                      <option></option>
                    </button>
                    <option>laptop</option>
                    <option>Mobile</option>
                    <option>Headset</option> */}
                    <select
                      name="priority"
                      className="form-control"
                      placeholder="Select your priority "
                    >
                      <option>विकल्प छान्नुहोस्</option>
                      <option>laptop</option>
                      <option>Mobile</option>
                      <option>Headset</option>
                      <option>Television</option>
                    </select>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFilter(false)}
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
