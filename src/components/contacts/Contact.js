import React, { useState } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

const Contact = props => {
  const { id, name, email, phone } = props.contact;
  const [showContactInfo, setShowContactInfo] = useState(true);

  const showInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const deleteInfo = async (event, id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
      console.log("Is it 404?");
    }

    dispatch({ type: "DELETE_INFO", payload: id });
  };

  return (
    <Consumer>
      {value => {
        return (
          <div className="card card-body mb-3">
            <h4>
              {name}
              <i
                className="fas fa-sort-down"
                onClick={showInfo}
                style={{ cursor: "pointer" }}
              />
              <i
                className="fas fa-times"
                style={{ cursor: "pointer", float: "right", color: "red" }}
                onClick={event => deleteInfo(event, id, value.dispatch)}
              />
            </h4>
            {showContactInfo ? (
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            ) : null}
          </div>
        );
      }}
    </Consumer>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
