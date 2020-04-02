import React, { Component, Fragment } from 'react'


import {Route} from 'react-router-dom'

 class HomeLayout extends Component {
    render() {
        return (
           <Fragment >
            
               {this.props.children}
            
           </Fragment>
        )
    }
}
export default function HomeTemplate({ Component, ...props }) {
    return (
      <Route
        {...props}
        render={propsRoute => (
          <HomeLayout>
            <Component {...propsRoute} />
          </HomeLayout>
        )}
      />
    );
  }

