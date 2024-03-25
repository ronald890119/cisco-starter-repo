import React, {Component} from "react";

class IP extends Component {
    constructor(props) {
        super(props);

        this.state = {
            IPv4: props.IPv4,
            ip: undefined
        };
    }

    
    componentDidMount() {
        if(this.state.IPv4) {
            fetch("https://api.ipify.org")
                .then(res => res.text())
                .then(data => this.setState({
                    ip: data
                }))
        } else {
            fetch("https://api6.ipify.org")
                .then(res => res.text())
                .then(data => this.setState({
                    ip: data
                }))
                .catch(error => this.setState({
                    ip: "No IPv6"
                }))
        }
    }

    render() {
        return (
            <div>{this.state.ip}</div>
        );
    }
}

export default IP;