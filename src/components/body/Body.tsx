import React from "react";
import Navbar from "components/navbar/Navbar";
import Style from './Body.module.css'
import ProjectHome from "routes/project-home/project-home";

const Body = () => {
    return (
        <div className={Style.body}>
            <Navbar side="left"/>

            <main className={Style.main}>
                <ProjectHome/>
            </main>

            <Navbar side="right" />
        </div>
    )
}

export default Body