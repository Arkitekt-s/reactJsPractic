
import {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    //fetch data from api
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setSearchResults(json))
    }, []);
    //search in the all tables and find keywoord
    const results = !searchTerm ?
        searchResults : searchResults.filter(person =>
            person.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ||person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            || person.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                || person.phone.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                || person.website.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                || person.address.street.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            || person.id.toString().includes(searchTerm.toLocaleLowerCase())
            //cheak inside of address


        );
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

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">USER NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">CONTACT PHONE</th>
                    <th scope="col">WEBSITE</th>
                    <th scope="col">STREET</th>
                    <th scope="col">CITY</th>
                </tr>
                </thead>
                <tbody>
                {results.map(item => {
                    return (
                    <tr key={item.id}>

                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.address.street}</td>
                        <td>{item.address.city}</td>
                    </tr>
                    )
                }
                )}
                </tbody>
            </table>

        </div>
    )
}


export default Search;