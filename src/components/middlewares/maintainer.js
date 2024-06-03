import { Navigate } from "react-router-dom"

const MaintainerAuthRequired = ({children})=>{
    const maintainer = localStorage.getItem('maintainer')
    if(maintainer){
        return children
    }else{
        return <Navigate to="/maintainer/login" />
    }
}


const MaintainerGuestRequired = ({children})=>{
    const maintainer = localStorage.getItem('maintainer')
    if(!maintainer){
        return children
    }else{
        return <Navigate to="/maintainer/ticket" />
    }
}

export {MaintainerAuthRequired, MaintainerGuestRequired}