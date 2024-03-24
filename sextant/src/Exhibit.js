import React, {Component} from "react";
import "./Exhibit.css"

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="Title">{this.props.title}</h2>
                <div className="Content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Exhibit;