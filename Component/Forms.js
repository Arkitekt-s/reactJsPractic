import React from "react";
import ReactDOM,{render} from "react-dom/client";




 export default class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
            password: ""
        }
    }
   handleInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })


    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        alert("Your name is:"+this.state.name+
            "\nYour age is:"+this.state.age+
            "\nYour email is:"+this.state.email+
            "\nYour password is:"+this.state.password
        )
    }

    render() {
        return (
            <Content data1={this.state} submit={this.handleSubmit} input={this.handleInput}/>
         );
    }
}

class Content extends React.Component {
    render() {

        return (
            <div>
                <form>

                    <input type="text" name="name" placeholder="name" onChange={this.props.input}/>
                    <input type="text" name="age" placeholder="age" onChange={this.props.input}/>
                    <input type="text"  name="email" placeholder="email" onChange={this.props.input}/>
                    <input type="text"  name="password" placeholder="password" onChange={this.props.input}/>
                    <button onClick={this.props.submit}>Submit</button>
                    <h1>{this.props.data1.name}</h1>
                    <h1>{this.props.data1.age}</h1>
                    <h1>{this.props.data1.email}</h1>
                    <h1>{this.props.data1.password}</h1>
                </form>
            </div>
         );
    }
}
