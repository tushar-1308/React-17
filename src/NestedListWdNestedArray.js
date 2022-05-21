import {Table} from 'react-bootstrap'

function NestedListWdNestedArray(){
    const nestedArray = [
        {name: 'Tushar', email: 'tushar@test.com', address: [
            {house: 'HouseNo23', city: 'Noida', country: 'India'}, 
            {house: 'HouseNo28', city: 'Gurgaon', country: 'India'}, 
            {house: 'HouseNo100', city: 'Pune', country: 'India'}
        ]},
        {name: 'Bruce', email: 'bruce@test.com', address: [
            {house: 'HouseNo24', city: 'Hydrebad', country: 'India'}, 
            {house: 'HouseNo30', city: 'Chennai', country: 'India'}, 
            {house: 'HouseNo102', city: 'Bangalore', country: 'India'}
        ]}
    ]
    return(
        <div>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        nestedArray.map((item, i)=>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <Table striped bordered hover variant='dark'>
                                    <tbody>
                                        {
                                            item.address.map((val, j)=>
                                                <tr key={j}>
                                                    <td>{val.house}</td>
                                                    <td>{val.city}</td>
                                                    <td>{val.country}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default NestedListWdNestedArray