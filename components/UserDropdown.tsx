'use-client';
import { useRouter } from "next/router";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDropdown = () => {
    const router = useRouter();
    const  handleSingout = async () => {
        router.push("sign-in")   
    }

    const user = {name:'gayathri', email : 'gayathri@smail.com'};



    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='flex items-center gap-2 text-gray-400 hover:text-yellow-200'></Button>            
        </DropdownMenuTrigger>
        
        <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
