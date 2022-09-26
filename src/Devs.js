import { render } from "@testing-library/react";
import React from "react";

class Devs extends React.Component{
    render(){
        const {name,age,skill} = this.props;
        // console.log(this.props)
        return(
            <div>
                <div>Name:{name}</div>
                <div>Age: {age}</div>
                <div>Skill: {skill}</div>
            </div>
        )
    }
}
 
export default Devs;


// Props are data passed through sub components and root components. It is defined(in the parent componenet) before it is rendered(in the child componenet). Data is gotten from the parent component and and assigned to a child's component.