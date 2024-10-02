"use client"
import Image from "next/image"

export default function SideBar() {

    return (
        <div className=" md:container md:mx-auto border-solid border-2 border-sky-500 h-full">
            <div className="Logo">
                <img src="/images/logo.jpeg" alt="Logo" className="logo"/>
            </div>
            <div className="botones">Bottones de exploracion</div>
            <div className="div">boton de logout</div>
            
        </div>
    )
}