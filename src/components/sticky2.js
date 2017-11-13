import React, { Component } from 'react'
import '../sticky.css'

export default class Sticky2 extends Component {
  render() {
    return(
      <div className="sticky2 sticky">
        <div className="sticky-top"></div>
        <a href='/sticky1link'>Tips and Tricks</a>
      </div>
    )
  }
}
