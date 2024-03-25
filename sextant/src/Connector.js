import { Component } from "react";

var W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket("ws://localhost:55455");

class Connector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: undefined
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
            <div className="Connector">{ this.state.latency } ms</div>
        )
    }
}

export default Connector;