import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footers"
export const AppLayout=()=>{

    return <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
}