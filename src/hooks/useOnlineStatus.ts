import { useEffect, useState } from "react";

const useOnlineStatus=():{isOnline:boolean}=>{
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
    },[])

    return {isOnline}
};

export default useOnlineStatus