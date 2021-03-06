import axios from "axios";
import React, { Component } from "react";
import LoadingUsers from "./loading/loading";

class Users extends Component {
  state = {
    users: [],
    isLoading: true
  };

  async componentDidMount(){
      const response = await axios.get("https://reqres.in/api/users");
      this.setState({users: response.data.data , isLoading:false})
  }
  render() {
    return (
      <div className="border border-light">
        <button type="button" className="btn btn-success m-5" onClick={this.handleCreate}>
          Create
        </button>
        <div className="row">
          {
              this.state.isLoading ? (
                  <LoadingUsers/>
              ) : (
                this.state.users.map((user) => {
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
                        <button type="button" class="btn btn-primary"  onClick={()=>{this.handleUpdate(user)}}>Update</button>
                    </div>
                    <div className="col-6">
                    <button type="button" class="btn btn-danger"  onClick={()=>{this.handleDelete(user)}}>Delete</button>
                    </div>
                </div>
              </div>
            );
          })
              )
          }
        </div>
      </div>
    );
  }


  handleCreate = async () => {
      const newUser = {
        first_name: 'shaden',
        last_name: 'Ghasri',
        email: 'ghasrishaden@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1517035753523-2077b746904d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
      };
      const response = await axios.post("https://reqres.in/api/users", newUser);
      this.setState({users: [...this.state.users, newUser]});
  };


  handleUpdate = async (user) => {
    user.first_name = "shaden";
    const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
    const updatedUsers = [...this.state.users];
    const userIndex = updatedUsers.indexOf(user);
    updatedUsers[userIndex] = {...user};
    this.setState({users: updatedUsers});


  };

  handleDelete = async (user) => {
    const response = await axios.delete(`https://reqres.in/api/users/${user.id}`);
    const newUser = this.state.users.filter(u => u.id !== user.id);
    this.setState({users:newUser })
  };
}

export default Users;
