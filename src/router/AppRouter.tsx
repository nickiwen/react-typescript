import * as React from "react"
import { Route,HashRouter } from "react-router-dom"
import App from "../App"

export default class AppRouter extends React.Component{
    public render(){
        return(
            <HashRouter>
                <Route path="/" component={ App } />
            </HashRouter>
        )
    }
}