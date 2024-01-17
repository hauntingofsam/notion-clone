import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
export const Footer=()=>{
    return(
        <div className="flex items-center w-full p-6 bg-background  dark:bg-[#1F1F1F] z-50">
            <Logo/>
            <div className="flex md:ml-auto w-full justify-between items-center md:justify-end gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Privacy Policy

                </Button>
                <Button variant="ghost" size="sm">
                    Terms and Conditions

                </Button>
            </div>
        </div>
        
    );
}