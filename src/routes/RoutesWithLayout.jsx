import React from "react";
import {withRouter,Route} from "react-router-dom";

class RoutesWithLayout extends React.Component{
    componentDidMount() {
        console.log("Component Did Mount is");
    }

    render() {
      const {Component} = this.props;
      return(
          <Route
              path={this.props.path}
              exact={this.props.exact}
              render={matchProps=>(
              <Component {...matchProps}/>
          )}>

          </Route>
      )
  }
}

export default withRouter(RoutesWithLayout);
