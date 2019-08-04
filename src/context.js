import React, { Component, createContext } from "react";
import axios from "axios";

const Context = createContext();

const ContactInfoReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_INFO":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_INFO":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

class Provider extends Component {
  state = {
    contacts: [
      // { id: 1, name: "Rajiv", email: "rajiv@gmail.com", phone: "1111 1111" },
      // { id: 2, name: "Harshu", email: "harshu@gmail.com", phone: "2222 2222" },
      // { id: 3, name: "Chottu", email: "chottu@gmail.com", phone: "3333 2222" }
    ],
    dispatch: action =>
      this.setState(prevState => ContactInfoReducer(prevState, action))
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    this.setState({
      contacts: response.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

export default Provider;
