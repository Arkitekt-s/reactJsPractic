import {useEffect, useState} from "react";

import  axios from "axios";
const client = axios.create({
    baseURL: "http://localhost:8080/customers/"
});
export default function Delete (){
    const [id, setID] = useState("");
    const [results, setResults] = useState([]);


    const deletePost = () => {
        client.delete(`${id}`)
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                setResults('Delete failed');
            });
    };
    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={e => setID(e.target.value)}
            />
            <button class="btn btn-primary" onClick={deletePost}>Delete</button>
            <p>{results}</p>
        </div>
    );
}
