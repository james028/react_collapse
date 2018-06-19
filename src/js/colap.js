import React, { Component } from 'react'

export default class Colap extends Component {
constructor() {
    super();
    this.state = {
        isExp: false
    };
}

    handleClick() {
        this.setState({
            isExp: !this.state.isExp
        })
    }

  render() {
    const {title, children} = this.props;
    const {isExp} = this.state;
    return (
        <div className={`panel ${isExp ? "is-expanded" : ""}`} onClick={this.handleClick.bind(this)}>
            <div className="panel-heading">
                {title}
            </div>
            <div className="panel-collapse">
                <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                </div>
            </div>
        </div>
    )
  }
}

