import React, {useState} from "react";
import Hello from "./components/Hello";

const Main=(props: any)=>{
    const {app: App} = props;

    return (
        <Hello message="React TypeScript Webpack Starter">
            <div className="features">
                <div>Webpack 5 + HMR</div>
                <div>TypeScript + React</div>
                <div>SCSS + Autoprefixing</div>
            </div>
        </Hello>
    )
}

export default Main;
