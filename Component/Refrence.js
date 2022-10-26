import react from "react";
import ReactDom, {render} from "react-dom";

export default class Ref1 extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "lolo",
        }

    }

    formhandle=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    clearhandle=()=>{
        this.setState({
            name:""

        })
            //clear the input value
            this.refs.reference.focus();
            this.refs.reference.style.color = "white";
            this.refs.reference.style.fontSize = "20px";
            this.refs.reference.style.fontWeight = "bold";
            this.refs.reference.style.border = "2px solid black";
            this.refs.reference.style.borderRadius = "5px";
            this.refs.reference.style.padding = "5px";
            this.refs.reference.style.margin = "5px";
            this.refs.reference.style.textAlign = "left";
            this.refs.reference.style.textTransform = "uppercase";
            this.refs.reference.style.textShadow = "2px 2px 5px red";
            this.refs.reference.style.fontFamily = "cursive";
            this.refs.reference.style.fontStyle = "italic";
            this.refs.reference.style.textDecoration = "underline";
            this.refs.reference.style.boxShadow = "2px 2px 5px red";
            this.refs.reference.style.backgroundColor = "#61dafb";
        }
    render() {
        return (
            <div>
                <form>
                    <input type="text" ref="reference" value={this.state.name} onChange={this.formhandle}/>
                    <input type="button" value="clear" onClick={this.clearhandle}/>
                </form>
                <h1>{this.state.name}</h1>
            </div>

           )
        }
    }