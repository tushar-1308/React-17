function PassFuncAsPropsChild(props){
    return(
        <div>
            <h1>Passing function as props</h1>
            {/* <button onClick={props.data}>Click me</button> */}
            <button onClick={()=>props.data()}>Click me</button>
        </div>
    )
}

export default PassFuncAsPropsChild