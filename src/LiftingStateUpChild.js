function LiftingStateUpChild(props){
    const name = 'Tushar Bansal'
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={()=>props.param(name)}>Send data to parent</button>
        </div>
    )
}

export default LiftingStateUpChild