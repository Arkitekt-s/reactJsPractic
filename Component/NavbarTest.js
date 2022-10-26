import react from "react";
import ReactDom, {render} from "react-dom";
import "./NavbarTest.css"


//creat class component navigation bar for header
export default class NavbarTest extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Home",
                    "url": "home"
                },
                {
                    "id": 2,
                    "name": "About",
                    "url": "about",

                },
                {
                    "id": 3,
                    "name": "Home",
                    "url": "home"
                },
                {
                    "id": 4,
                    "name": "Contact",
                    "url": "contact",

                }
            ]
        }


    }

    render() {
        return (
            <nav className="navbar">
                <a>
                    {this.state.data.map((dynamicData) =>
                        <ul key={dynamicData.id}><a href={dynamicData.url}>{dynamicData.name} </a></ul>

                    )}

                </a>
            </nav>
        )
    }
}