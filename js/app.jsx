import React from "react";
import ReactDOM from "react-dom";
import appRoutes from './router.jsx';

document.addEventListener('DOMContentLoaded', function(){
    class App extends React.Component{
        render(){
            return appRoutes;
        }
    }
    ReactDOM.render(
        <App/>, 
        document.getElementById("app")); 
});