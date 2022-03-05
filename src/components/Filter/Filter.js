import React from "react";
import "../../App.scss";

const Filter = (props) => {
  const { setFilter } = props;

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
                class="close btn-danger"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setFilter(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <a>Price</a>
                <br />
                <input type="number" placeholder="Min"></input>
                <a>-</a>
                <input type="number" placeholder="Max"></input>
              </div>
              <br />
              <div>
                <a>Date</a>
                <br />
                <input type="date" />
              </div>
              <br />
              <div>
                <a>Category</a>
                <div className="category">
                  <input type="text" placeholder=" विकल्प छान्नुहोस्" />
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn  dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" >
                        Laptop
                      </a>
                      <a class="dropdown-item" >
                        SmartPhones
                      </a>
                      <a class="dropdown-item" >
                        HeadSet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="btn btn-success">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;