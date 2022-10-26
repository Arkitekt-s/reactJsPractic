import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  axios from "axios";
const client = axios.create({
    baseURL: "http://localhost:8080/customers/"
});

//delet post in table with use effect and fetch
export default function Search2(){
    //this is for search value search
        const [searchTerm, setSearchTerm] = useState("");
        //this is for fetch data from api
        const [searchResults, setSearchResults] = useState([]);

        const handleChange = event => {
            setSearchTerm(event.target.value);
        };
        //fetch data from api
        const search = () => {
            client.get()
                .then(response => {
                    setSearchResults(response.data);
                })
                .catch(error => {
                    setSearchResults('Search failed');
                });
        }
    //search in the all tables and find keyword
    const results = !searchTerm

        ? searchResults : searchResults.filter(person =>
            person.name.toLowerCase().includes(searchTerm)
            || person.email.toLowerCase().includes(searchTerm)
            || person.username.toLowerCase().includes(searchTerm)
            || person.phone.toLowerCase().includes(searchTerm)
            || person.id.toString().includes(searchTerm));







        return (
            <div className="Search">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Button variant="outline-success" onClick={search}>Search</Button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>FAMILY NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {results.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        );
                    }
                    )}
                    </tbody>
                </table>
            </div>
        );
}