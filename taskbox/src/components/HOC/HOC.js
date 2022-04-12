import React from 'react'

export function HOC(WrappedComponent, data){

    return class extends React.Component{

        constructor(props){
            super(props)
            this.data2 = data + "button"
        }       

        render(){
            return(
                <WrappedComponent label={this.data2} />
            )
        }
        
    }
}

/**
 * To Use 
 */
// const NewComp = HOC(Button, "apple")
// const NewComp2 = HOC(Button, "microsoft ")
// <NewComp />

