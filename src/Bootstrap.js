import {Table} from 'react-bootstrap'

function Bootstrap(){
    const students = [
        {name: 'Tushar', email: 'tushar@test.com', contact: 111},
        {name: 'Bansal', email: 'bansal@test.com', contact: 222},
        {name: 'Sam', email: 'sam@test.com', contact: 333},
        {name: 'Petre', email: 'peter@test.com', contact: 444}
    ]
    return(
        <div>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, i)=>
                            <tr key = {i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Bootstrap