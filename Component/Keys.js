import React, {Component} from "react";
//save the information from peoples
export default class Keys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "James",
                    id: 1,
                    mobile: 98674321,
                    aga: 52,
                    address: "IR"
                },
                {
                    name: "Soheil",
                    id: 2,
                    mobile: 989674321,
                    aga: 32,
                    address: "Uk"
                },
                {
                    name: "Soheil",
                    id: 3,
                    mobile: 989674321,
                    aga: 32,
                    address: "Uk"
                },
                {
                    name: "Godson",
                    id: 4,
                    mobile: 555674321,
                    aga: 33,
                    address: "Dk"
                }

            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.data.map((users) => (
                    <Content key={users.id} users={users}/>
                ))}
            </div>
        );
    }

}
class Content extends Component {
    render() {
        return (
            <div>
               name:{this.props.users.name} - age:{this.props.users.age} - id:{this.props.users.id} - address:{this.props.users.address} - mobile:{this.props.users.mobile}
            </div>
        );
    }
}