import React from "react";
import { Redirect, Route} from "react-router";

    function ProtectedRoute({isAuth,component:Component,...rest}){
        return(
            <Route
                {...rest}
                render={(props)=>{
                    console.log(props);
                    if(isAuth){
                        return<Component/>;
                    }else{
                        return <Redirect to = {{pathname:'/',state:{from:props.location}}}></Redirect>
                    }
                }}
            />
        )
    }
    export default ProtectedRoute;