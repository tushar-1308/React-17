function Map_for_arrayWithObjects(){
    const names = ['Tushar', 'Bansal', 'Sam', 'Peter']
    const students = [
        {name: 'Tushar', email: 'tushar@test.com', contact: 111},
        {name: 'Bansal', email: 'bansal@test.com', contact: 222},
        {name: 'Sam', email: 'sam@test.com', contact: 333},
        {name: 'Ptere', email: 'peter@test.com', contact: 444}
    ]

    // map - looping
    names.map((item)=>{
        console.warn(item)
    })
    // for(for, while can't be use inside return) - looping
    for(let i=0; i<names.length; i++){
        console.warn(names[i])
    }

    return(
        <div>
            <h1>Hello</h1>
            <table border="1">
                <tbody>
                {
                    students.map((item, i)=>
                    <tr key = {i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Map_for_arrayWithObjects