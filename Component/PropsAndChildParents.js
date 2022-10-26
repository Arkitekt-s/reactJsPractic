import React from "react";

export {Props1};


//creat child and parent component

class Props1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "this is a header from Props1",
            body: "this is body for Props1"
        };

    }
    render() {
        return (
            <div>
                <Header header= {this.state.header}/>
                <Body body= {this.state.body}/>
            </div>
         );
    }
}
class Header extends React.Component {
    render() {
        return (
                <h1>{this.props.header}</h1>
         );
    }
}
class Body extends React.Component {
    render() {
        return (
                <h1>{this.props.body}</h1>
         );
    }
}

