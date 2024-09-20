import { useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom";

export const ErrorPage=()=>{
    const error = useRouteError();

    return (
    <div>
    <h2>Oops! An errror occuresd</h2>
    {error && <p>{error.data}</p>}
    <NavLink to='/'>
    <button> Go Back</button>
    </NavLink>
    </div>
    )
}