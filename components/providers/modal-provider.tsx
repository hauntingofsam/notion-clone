"use client";
import { useState,useEffect } from "react";
import { SettingsModal } from "../modals/settings-modal";
import { CoverImageModal } from "../modals/cover-image-modal";
export const ModalProvider=()=>{
    const [ismounted,setisMounted]=useState(false);
    useEffect(()=>{

        setisMounted(true);
    },[]);
    if(!ismounted){
        return null;
    }
    return(
        <>
            <SettingsModal/>
            <CoverImageModal/>
        </>
    );
};