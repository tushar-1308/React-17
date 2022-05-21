function FunctionComponent(){
    
    function NestedFunctionComponent(){
        return(
            <h1>
                I am Nested Function Component
            </h1>
        )
    }

    return(
        <div>
            <h1>
                I am Function Component
            </h1>
            <NestedFunctionComponent/>
        </div>
        
    )
}

export default FunctionComponent;