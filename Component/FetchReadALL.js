//creat function component for App useEffect
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

function UseEffect1(){
    const[resourseType, setResourseType] = useState("");
    const[items, setItems] = useState([]);


    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
                .then(response => response.json())
                .then(json => setItems(json))
        }
        , [resourseType]);

    return (
        <div>
            <div>
                <h1>{resourseType}</h1>
                <Button className="my-2 m-2" onClick={() => setResourseType("posts")}>Posts</Button>
                <Button className="my-2 m-2" onClick={() => setResourseType("users")}>Users</Button>
                <Button className="my-2 m-2" onClick={() => setResourseType("comments")}>Comments</Button>
                <h1>{items.length}</h1>
            </div>
            {/*PRINT all item in table format with bootstrap*/}
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                </tr>
                </thead>
                <tbody>

                {items.map(item => {
                        return (

                            //make it scrollable
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <button type="button" className="btn btn-outline-info my-2 m-2">EDIT</button>
                                <button type="button" className="btn btn-outline-danger my-2 m-2">DELETE</button>
                            </tr>

                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    );
}
export default UseEffect1;