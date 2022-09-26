import React from "react";
import './sign-in.css';
import {Link} from 'react-router-dom';

const SignIn = () => {
    return ( 
        <div>
            <h1>Have an account already</h1>
            <h3>Sign in here!</h3>

            <form>
                <label for = "email">Email</label>
                <input name = "email" type="email"/>
                <label for = "password">Password</label>
                <input name = "password" type="password"/>
                <label for = "text">Project Name</label>
                <input name = "text" type="text"/>

                <Link to = '/scrumboard'><button>SIGN IN</button></Link>
            </form>
            <p>Don't have an account? <Link to = "/signup">Sign up</Link></p>
            <p><Link to = "/">Back to Home</Link></p>

        </div>
     );
}
 
export default SignIn;