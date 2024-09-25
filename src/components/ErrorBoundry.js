import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ robots: users})});
    }

    render() {
        if(this.state.hasError) {
            return <h1>Oops! Something went wrong.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;