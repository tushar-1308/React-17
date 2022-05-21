import ReuseComponentChild from "./ReuseComponentChild"

function ReuseComponent(){
    const students = [
        {name: 'Tushar', email: 'tushar@test.com', contact: 111},
        {name: 'Bansal', email: 'bansal@test.com', contact: 222},
        {name: 'Sam', email: 'sam@test.com', contact: 333},
        {name: 'Petre', email: 'peter@test.com', contact: 444}
    ]
    return(
        <div>
            <h1>Reuse component</h1>
            {
                students.map((item, i)=>
                <ReuseComponentChild data={item}/>
                )
            }
        </div>
    )
}

export default ReuseComponent