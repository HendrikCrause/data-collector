import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header/header'
import Footer from './footer/footer'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default Layout
