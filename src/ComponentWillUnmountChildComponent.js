import { Component } from "react";

class ComponentWillUnmountChildComponent extends Component{
    componentWillUnmount(){
        console.warn("componentWillUnmount")
    }
    render(){
        return(
            <h1>child component show</h1>
        )
    }
}

export default ComponentWillUnmountChildComponent