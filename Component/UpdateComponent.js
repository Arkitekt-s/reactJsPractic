import React from "react";
import ReactDom, {render} from "react-dom";


export {UpdateComponent,UpdateComponent2,UpdateComponent3};

//componentAPI

class UpdateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: ["soheil, ", "sepehr, ", " and sara."]
        }
        //this method use to bind this to handleClick and use it in render and access to this
        this.sethandleClick = this.sethandleClick.bind(this);
    }


    sethandleClick()  {
        let item ="hi ";
        let myArray = this.state.data1;
//its push item and array on click button
        myArray.push(item+myArray);
        //DATA UPDATE WITH MYARRAY
        this.setState({data1: myArray});


    }
    render() {
        return (
            <div>
                <button onClick={this.sethandleClick} >ADD</button>
                <h1>{this.state.data1}</h1>
            </div>
         )
    }
}
//USING ARROW FUNCTION WORKED THE SAME AS BIND Method2
class UpdateComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data :"Random number"

        }
    }
    forceUpdateHandler = () => {
        //forceupdate change the value of random number
        this.forceUpdate();

    }

    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler} >UPDATE</button>
                <h1>{Math.random()}</h1>
                <h2>{this.state.data} </h2>
            </div>
        )
    }
}
//new component update same component in math.random
class UpdateComponent3 extends React.Component {
    constructor(props) {
        super(props);

    }
    findDomhandler = () => {
        //forceupdate change the value of random number
        const myDiv1 = document.getElementById("test1");
        const myDiv2 = document.getElementById("test2");
        const myDiv3 = document.getElementById("test3");
        const myDiv4 = document.getElementById("test4");
        const myDiv5 = document.getElementById("test5");
        const myDiv6 = document.getElementById("test6");
        const myDiv7 = document.getElementById("test7");
        const myDiv8 = document.getElementById("test8");
        const myDiv9 = document.getElementById("test9");
        const myDiv10 = document.getElementById("test10");
        //THIS METHOD OF FINDDOMnode find the dive and change the color
        ReactDom.findDOMNode(myDiv1).style.color = "red";
        ReactDom.findDOMNode(myDiv2).style.backgroundColor = "blue";
        ReactDom.findDOMNode(myDiv3).style.fontSize = "30px";
        ReactDom.findDOMNode(myDiv4).style.fontWeight = "bold";
        ReactDom.findDOMNode(myDiv5).style.fontStyle = "italic";
        ReactDom.findDOMNode(myDiv6).style.fontFamily = "cursive";
        ReactDom.findDOMNode(myDiv7).style.textDecoration = "underline";
        ReactDom.findDOMNode(myDiv8).style.textAlign = "center";
        ReactDom.findDOMNode(myDiv9).style.textTransform = "uppercase";
        ReactDom.findDOMNode(myDiv10).style.textShadow = "2px 2px 5px red";
    }
    //back to default root refresh page
    back = () => {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <button onClick={this.findDomhandler}>UPDATE COLOR</button>
                <button onClick={this.back}>BACK</button>
                <div id={"test1"}>div1</div>
                <div id={"test2"}>div2</div>
                <div id={"test3"}>div3</div>
                <div id={"test4"}>div4</div>
                <div id={"test5"}>div5</div>
                <div id={"test6"}>div6</div>
                <div id={"test7"}>div7</div>
                <div id={"test8"}>div8</div>
                <div id={"test9"}>div9</div>
                <div id={"test10"}>div10</div>
            </div>

        )
    }
}
