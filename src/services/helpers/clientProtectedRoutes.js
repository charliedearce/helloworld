import React from "react";
import {Route, Redirect} from "react-router-dom";
import auth from "./auth";

export const ClientRoute = ({
                                               component: Component,
                                               ...rest
                                           }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    if(JSON.parse(localStorage.getItem('login'))['type'] === 1){
                        return <Component {...props} />;
                    }
                else {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export const TherapistRoute = ({
                                component: Component,
                                ...rest
                            }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    if(JSON.parse(localStorage.getItem('login'))['type'] === 2){
                        return <Component {...props} />;
                    } else {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
