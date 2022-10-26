import React, {Component} from "react";
//export MyComponent;
export {Test1,Test2,Test3,Test4,Test5} ;



class Test1 extends Component {
    render() {
        return (
            <div>
                <h1 >SEARCH USERS</h1>
            </div>
        );
    }

}
//export default Test1;

 function Test2(props) {
    return (
        <div>
            <p>{props.fname}</p>

        </div>

    );
}

//creat object with state
class Test3 extends Component {

    state = {
        name: "soheil",
        lastname: "mohammadi",
        age: 37,
        show: true,
        location: "tehran",
        header: "Hello Soheil",
        body: "this is body for soheil"
    }
    //this can access to state
    render() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.lastname}</p>
        </div>
    );
}
}
//better way of creat object with state
class Test4 extends Component {

    state = {
        name: "ahmad",
        lastname: "bikar",
        age: 27,
        show: true,
        location: "dk",
        header: "Hello ahmad",
        body: "this is body for ahmad"
    }
    //this can access to state
    render() {
        const {name,lastname,age,show,location,header,body} = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <p>{lastname}</p>
                <p>{age}</p>
                <p>{show}</p>
                <p>{location}</p>
                <p>{header}</p>
                <p>{body}</p>

            </div>
        );
    }
}
//best way of creat object with state
class Test5 extends Component {

    state = {
        name: "ali",
        lastname: "lolo",
        age: 270,
        show: true,
        location: "kkk",
        header: "Hello ali",
        body: "this is body for ali"
    }
    //this can access to state
    render() {
        const {state} = this;
        return (
                <ul>
                    {Object.keys(state).map(key=> (
                    <li key={key}>
                        <strong>{key}: </strong>{state[key]}
                    </li>
                        ))}
                </ul>

        );
    }
}





