import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import  axios from "axios";
import Form from "react-bootstrap/Form";

const client = axios.create({
    baseURL: "http://localhost:8080/customers"
});

export default function Create (){
    const [name, setName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [posts, setPosts] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, familyName, emailAddress, phoneNumber, posts);
    };

    const addPosts = (name, familyName, emailAddress, phoneNumber, posts) => {
        client
            .post('', {
                firstname: name,
                lastname: familyName ,
                email: emailAddress,
                phone: phoneNumber

            })
            .then((response) => {

                    //send message to user
                    setPosts([...posts, response.data]);
            });

        setName('');
        setFamilyName('');
        setEmailAddress('');
        setPhoneNumber('');

    };

    return (
        <div className="Create">


            <h3>Fill in the form below to add a new customer</h3>


            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Family Name"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button type="submit">Add</button>


            </form>

        </div>
    );
}



















//delete  customers in table with useEffect AND FETCH


/*export default function Delete() {
    const [deleteTerm, setDeleteTerm] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8080/customers/${deleteTerm}`)
        method: 'DELETE',
        .then(response => response.json())
        .then(json => setDeleteResults(json))
}, []);

    return (

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">LASTNAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">CONTACT PHONE</th>
                </tr>
                </thead>
                <tbody>
                {results.map(item => {
                        return (
                            <tr key={item.id}>

                                <th scope="row">{item.id}</th>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <Button variant="danger" onClick={() => (setDeleteTerm.item.id)}>Delete</Button>

                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>

    )


}*/



































/*export default function Delete(){
    const [idCustomer, setIDCustomer] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = event => {
        setResults(event.target.value);
    };

        // DELETE request using fetch with error handling
        useEffect(() => {
            // DELETE request using fetch with async/await
            async function deletePost() {
                await fetch('http://localhost:8080/customers/${idCustomer}',
                    { method: 'DELETE' });
                setResults('Delete successful');
            }

            deletePost();
        }, [idCustomer]);

    return (
        <div className="Search">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={IDCustomer}
                onChange={handleChange}
            />

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">LASTNAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">CONTACT PHONE</th>
                </tr>
                </thead>
                <tbody>
                {results.map(item => {
                        return (
                            <tr key={item.id}>

                                <th scope="row">{item.id}</th>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <Button variant="danger" onClick={() => deleteCustomer(item.id)}>Delete</Button>
                            </tr>


                        )
                    }
                )}
                </tbody>
            </table>

        </div>
    )
}*/

