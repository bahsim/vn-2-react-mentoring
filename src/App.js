import logo from "./logo.svg";
import "./App.css";
import { Component, useEffect, useState } from "react";

class TextMessage extends Component {
    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div onClick={this.props.onClick}>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

class App1 extends Component {
    state = {
        count: 0,
        stateValue1: "",
        stateValue2: "",
        stateValue3: "",
        stateValue4: "",
        stateValue5: "",
    };

    handleOnClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {this.state.count % 2 === 0 && (
                        <TextMessage onClick={this.handleOnClick}>
                            Edit sdfg sdfg sdfg -{" "}
                            <strong>{this.state.count}</strong>
                        </TextMessage>
                    )}
                    <div onClick={this.handleOnClick}>
                        <p>Click me</p>
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

function App() {
    const [data, setData] = useState({
        count: 0,
    });
    // const [stateValue1, setStateValue1] = useState({
    //     count: 0,
    // });
    // const [stateValue2, setStateValue2] = useState({
    //     count: 0,
    // });

    // componentDidMount
    useEffect(() => {
        console.log("useEffect - componentDidMount")
        return () => {
            // componentDidMount
            console.log("useEffect - componentDidMount")
        }
    }, []);

    useEffect(() => {
        // componentDidUpdate
        console.log("useEffect - componentDidUpdate")
    }, [data])

    const handleOnClick = () => {
        setData({ ...data, count: data.count + 1 });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <TextMessage onClick={handleOnClick}>
                    Edit sdfg sdfg sdfg - <strong>{data.count}</strong>
                </TextMessage>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
