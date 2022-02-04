import React from "react";
import Navbar from "components/navbar/Navbar";
import Style from './Body.module.css'
import ProjectHome from "routes/project-home/project-home";
import Header from "components/header/header";

const Body = () => {
    return (
        <div className={Style.body}>
            <Header/>

            <main className={Style.main}>
                <ProjectHome/>
            </main>
        </div>
    )
}

export default Body