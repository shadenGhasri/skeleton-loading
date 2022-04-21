import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [],
  };
  render() {
    return (
      <div className="border border-light">
        <button type="button" className="btn btn-success m-5">
          Create
        </button>
        <div className="row">
          {this.state.users.map((user) => {
            return (
              <div className="col-4 text-center p-5">
                <img
                  src={user.avatar}
                  style={{ borderRadius: "50%", width: "100px" }}
                  alt="avatar"
                />
                <h4>
                  {user.first_name} {user.last_name}
                </h4>
                <h5>{user.email}</h5>
                <div className="row">
                    <div className="col-6">
                        <button type="button" class="btn btn-primary" onClick={this.handleUpdate}>Update</button>
                    </div>
                    <div className="col-6">
                    <button type="button" class="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
