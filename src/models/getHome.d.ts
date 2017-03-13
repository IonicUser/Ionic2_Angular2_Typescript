export class getHome{
    _id:string;
    name: string;
    display_name: string;
    prim_user: user;
    other_users: Array<user>;
    wifi_details:Array<wifi_details>;
    isDefault:boolean;
}

interface user{
    _id:string;
    email:string;
    name:string;
    phone:number;
}


interface wifi_details{
    _id:string;
    name:string;
    password:string;
}
