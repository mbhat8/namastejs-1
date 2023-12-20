import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h3>
                Ooops?????????Something Went Wrong!!!!!!
            </h3>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error;