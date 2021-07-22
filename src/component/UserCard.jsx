import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this._fetchUser();
  }

  _fetchUser = () => {
    this.setState(
      {
        isLoading: true,
      },

      async () => {
        const response = await fetch(
          "https://randomuser.me/api/?results=1"
        ).then((response) => response.json());
        this.setState({
          user: response.results,
          isLoading: false,
        });
      }
    );
  };
  render() {
    const { user, isLoading } = this.state;
    return (
      <>
        <p>{!!isLoading ? "StandBy..." : ""}</p>
        {user.map((userDetail) => (
          <p>
            {userDetail.name.first}
            {userDetail.name.last}
            {userDetail.email}
          </p>
        ))}
        <button type="button" onClick={this._fetchUser}>
          {""}
          Collect User Information
        </button>
      </>
    );
  }
}

export default UserCard;
