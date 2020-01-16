import React, { Component } from 'react'

export default class Row extends Component {
    render() {
        return (
            <div className={'row ' + this.props.addClass}>
                {this.props.children}
            </div>
        )
    }
}
