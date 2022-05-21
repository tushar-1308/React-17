import { Component } from "react";
import ComponentWillUnmountChildComponent from "./ComponentWillUnmountChildComponent";

class ComponentWillUnmountParentComponent extends Component{
    constructor(){
        super();
        this.state = {
            show : true
        }
    }
    render(){
        return (
            <div>
                {
                this.state.show?
                <ComponentWillUnmountChildComponent/>:
                <h1>Child component removed</h1>
                }
                <button onClick = {()=>this.setState({show:!this.state.show})}>Toggle Button</button>
            </div>
        )
    }
}

export default ComponentWillUnmountParentComponent