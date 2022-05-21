import {withRouter} from 'react-router-dom'

function DynamicRoutingChild(prop){
    console.warn(prop.match.params.id)
    return(
        <div>
            <h1>Hi this is user no {prop.match.params.id}</h1>
            <h1>Hi this is {prop.match.params.name}</h1>
        </div>
    )
}

export default withRouter(DynamicRoutingChild)