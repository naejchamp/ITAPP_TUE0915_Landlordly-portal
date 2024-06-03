import { Navigate } from "react-router-dom"

const LandlordAuthRequired = ({children})=>{
    const landlord = localStorage.getItem('landlord')
    if(landlord){
        return children
    }else{
        return <Navigate to="/login" />
    }
}


const LandlordGuestRequired = ({children})=>{
    const landlord = localStorage.getItem('landlord')
    if(!landlord){
        return children
    }else{
        return <Navigate to="/landlord" />
    }
}

export {LandlordAuthRequired, LandlordGuestRequired}