export class authToken{
    constructor(){}
    token:string;
    checker(){
        this.token=JSON.stringify(localStorage.getItem("token"));
        if(this.token)
        return this.token;
    }
    
}