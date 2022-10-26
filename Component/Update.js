import {useEffect, useState} from "react";

import  axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8080/customers/"
});
 function Update1 () {
   const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [results, setResults] = useState([]);
//update post in table with use effect and axios
    const handleChange = event => {
        setResults(event.target.value);
    }
    const updatePost = () => {
        client.
        put(`${id}`, {
            name: name,
            email: email,
            lastname: lastname,
            phone: phone
        })
            .then(response => {
                setResults(response.data);
            }
            )
            .catch(error => {
                setResults('Update failed');
            }
            );

        }
    return (
        <div className={"update"}>
            <input
                placeholder="id"
                type="IDCustomer"
                value={id}
                onChange={e => setID(e.target.value)}
            />
            <input
                type="Name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="Email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="Lastname"
                placeholder="Lastname"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
            />
            <input
                type="PHONE"
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />

            <button class="btn btn-primary" onClick={updatePost}>Update</button>
            <p>{results}</p>
        </div>

    );

}


export default Update1;
