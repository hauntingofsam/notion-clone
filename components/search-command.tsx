import { useEffect,useState } from "react";
import { File } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { CommandDialog,CommandInput,CommandGroup,CommandList,CommandEmpty,CommandItem } from "./ui/command";
import { api } from "@/convex/_generated/api";
import { useSearch } from "@/hooks/use-search";
export const SearchCommand=()=>{
    const {user}=useUser();
    const router=useRouter();
    const documents=useQuery(api.documents.getSearch);
    const toggle=useSearch((store)=>store.toggle);
    const isOpen=useSearch((store)=>store.isOpen);
    const onClose=useSearch((store)=>store.onClose);
    const [ismounted,setisMounted]=useState(false);
    useEffect(()=>{
        setisMounted(true);
    },[]);
    useEffect(()=>{
        const down=(e:KeyboardEvent)=>{
            if(e.key==="k" && (e.metaKey||e.ctrlKey)){
                e.preventDefault();
                toggle();
            }
        }
        document.addEventListener("keydown",down);
        return ()=>document.removeEventListener("keydown",down);
    },[toggle]);
    if(!ismounted){
        return null;
    }
    const onSelect=(id:string)=>{
        router.push(`/documents/${id}`);
        onClose();

    };
    return(
        <CommandDialog open={isOpen} onOpenChange={onClose}>
            <CommandInput placeholder={`Search ${user?.fullName}'s Jotion...`}/>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Documents">
                        {documents?.map((document)=>(
                            <CommandItem key={document._id} 
                            value={`${document._id}-${document.title}`}
                            title={document.title}
                            onSelect={() => onSelect(document._id)}>
                                {document.icon?(
                                    <p className="mr-2 text-[18px]">
                                        {document.icon}

                                    </p>

                                ):(
                                    <File className="h-4 w-4 mr-2"/>
                                )}
                                <span>{document.title}</span>

                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>

            

        </CommandDialog>
    )
}