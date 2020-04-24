import React from "react";

export class NavBar extends React.Component {

  state = {
      searchingString: ''
  }

  render() {

    let rest = <></>;

    if (this.props.state == "account") {
      rest = <>
        <button class="btn btn-secondary" type="button" onClick={() => this.props.obj.onSave()}>Save</button>
      </>;
    } else if (this.props.state == "landing") {
      rest = <>
        <button type="button" className="btn btn-secondary" onClick={() => console.log("FIXME: route to account page")}>Sign Up</button>
      </>;
    } else if (this.props.state == "dashboard") {
      rest =
        <>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => this.setState({searchingString: e.target.value})}/>
            <button class="btn btn-secondary my-2 my-sm-0" type="button" onClick={()=>{console.log("FIXME:route to searching page passing searchingString and DashBoard obj")}}>Search</button>
          </form>
          <button class="btn btn-secondary my-2 my-sm-0" type="button">My Account</button>
          <button class="btn btn-secondary my-2 my-sm-0" type="button">Add a Prescription</button>
        </>
    }

    return <>
      <nav className="navbar navbar-light bg-primary">
        <a style={{ fontSize: 40, color: "White" }} className="navbar-brand" href="/">Mr.Pharmacy</a>
        {rest}
      </nav>
    </>
  }
}

