import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="border-spacing-x-1 m-auto max-w-screen-xl">
        <h2>Add Contact</h2>
        <form action="" className="" onSubmit={this.add}>
          <div className="mb-2">
            <label htmlFor="Name " className="mr-2 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="border-2 py-1 px-3 border-stone-800"
            />
          </div>

          <div className="mb-2 ">
            <label htmlFor="Email" className="mr-2 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="border-2 py-1 px-3 border-stone-800"
            />
          </div>

          <button className="bg-blue-500 text-white text-base m-2 px-4 py-1">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
