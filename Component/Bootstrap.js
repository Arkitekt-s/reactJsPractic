import react,{useState,useEffect,createContext,useContext} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import {render} from "react-dom";
import {Test1} from "./MyComponent";
import AppRedux from "./AppRedux";
import Search from "./Search";
import UseEffect1 from "./FetchReadALL";
import Search2 from "./Search2";
import Create from "./AddCustomer";
import Delete from "./Delete";
import Update1 from "./Update";






//creat user context for handle user
const UserContext = createContext();



export default class Bootstrap1 extends react.Component {
    render() {
            return (
                <BrowserRouter>
                <Navbar bg="dark" expand="lg">
                    <Container fluid>
                        {/*//logo picture of my site*/}

                        <Navbar.Brand href={"/Empty"}>Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {/*this link make the page link to specific area or component*/}
                                <Nav.Link href={"/Home"}>Home</Nav.Link>
                                <Nav.Link href={"/Link"}>Link</Nav.Link>


                                <NavDropdown class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <NavDropdown.Item  href={"/App"}>READ ALL POSTS</NavDropdown.Item>
                                    <NavDropdown.Item href={"APP1"}>
                                        SEARCH USERS
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href={"APP2"} >
                                        ACTION2
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                    {/*//MAKE A ROUTE FOR EACH LINK*/}
                    <Routes>
                        <Route exact path={"/Home"} element={<><Create/><Delete/></>}/>
                        <Route exact path={"/Link"} element={<><Update1/></>}/>
                        <Route exact path={"/App"} element={<div><App/><UseEffect1/></div>}/>
                        <Route exact path={"/APP1"} element={<><Test1/><Search/></>}/>
                        <Route exact path={"/APP2"} element={<><Edit/><AppRedux/><Search2/></>}/>
                        <Route exact path={"/"} element={<Empty/>}/>
                    </Routes>


        </BrowserRouter>
            );
        }

}
class Empty extends react.Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}
class Home extends react.Component {
    render() {
        return (
            <div>
                <h1>THIS IS Home PAGE</h1>
            </div>

        );
    }
}
class Link1 extends react.Component {
    render() {
        return (
            <div>
                <h1>THIS IS A Link</h1>
            </div>
        );
    }
}
//creat function component for App useState
function App() {
    const[person, setPerson] = useState({
        name: "lili",
        family: "khilili",
        age: 20,
        message: "hello world"

    });
    const changePerson= () => {
        setPerson({...person, message: "hello world2",name:"lili2"});
    }
    return (
        <div >
        <h1>Name: {person.name} - Age:{person.message}</h1>
            <Button onClick={changePerson}>Change Name</Button>
        </div>
    );

}

//search in the all tables and find keywoord

//USE CONTEXT Example this is the parent component
function Edit(){
    const [user] = useState("soheil");
    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user}</h1>
            <Edit4 user={user}/>
            </UserContext.Provider>
    )
}

function Edit4(){
    const user = useContext(UserContext);
    return (
        <div >
            <h1>Hello {user}</h1>
        </div>
    )
}









