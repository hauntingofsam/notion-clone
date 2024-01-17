"use client";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import React from "react";
import { redirect } from "next/navigation";
import { Navigator } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";
// import { Navigation } from "lucide-react";

const MainLayout=({children}:{children: React.ReactNode})=>{
    const {isAuthenticated, isLoading}=useConvexAuth();
    if(isLoading){
        return(
            <div className="h-full flex justify-center items-center">
                <Spinner size="lg"/>
            </div>
        );
    }
    if(!isAuthenticated){
        return redirect("/");
    }
    return(
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <Navigator />
            <main className="flex-1 h-full overflow-y-auto">
                <SearchCommand/>
                {children}
            </main>
            
        </div>


    );
}
export default MainLayout;