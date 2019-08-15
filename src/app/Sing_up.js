import React, { Component } from "react";
import { browswerHistory } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sing_up extends Component {
  constructor() {
    super();
    this.state = {
      first_Name: "",
      last_Name: "",
      email: "",
      pwd: "",
      _id: "",
      clientes: []
    };
    this.handlechange = this.handlechange.bind(this);
    this.addCliente = this.addCliente.bind(this);
  }

  addCliente(e) {
    e.preventDefault();
    fetch("/api/cliente", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        window.M.toast({ html: "Usuario guardado" });
        this.setState({ first_Name: "", last_Name: "", email: "", pwd: "" });
        this.fetchCliente();
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.fetchCliente();
  }

  fetchCliente() {
    fetch("/api/cliente")
      .then(res => res.json())
      .then(data => {
        this.setState({ clientes: data });
        console.log(this.state.clientes);
      });
  }

  handlechange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <form className="col s12" onSubmit={this.addCliente}>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      name="first_Name"
                      onChange={this.handlechange}
                      value={this.state.first_Name}
                      placeholder="First Name"
                      type="text"
                      className="validate"
                    />
                    <label>First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      name="last_Name"
                      onChange={this.handlechange}
                      value={this.state.last_Name}
                      type="text"
                      className="validate"
                    />
                    <label>Last Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="email"
                      onChange={this.handlechange}
                      value={this.state.email}
                      type="email"
                      className="validate"
                    />
                    <label>Email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="pwd"
                      onChange={this.handlechange}
                      value={this.state.pwd}
                      type="password"
                    />
                    <label>Password</label>
                  </div>
                </div>

                <button type="submit" className="btn ligth-blue darken-4">
                  Sing up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sing_up;
