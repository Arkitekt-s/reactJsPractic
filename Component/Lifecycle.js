import React from "react";
import ReactDOM,{render} from "react-dom/client";
export {LifeCycle1};


 class LifeCycle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:0
        }
    }
    increment=()=>{
        this.setState({data:this.state.data+1});
    }

     render() {
        return (
            <div>
                <button onClick={this.increment} >INCREMENT</button>
                <Number number={this.state.data}/>
            </div>
         );
    }
}
class Number extends React.Component {
    componentDidMount()  {
        //build in component to show the state of component
        alert("componentdidmount");

    }


    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
         );
    }
}
