import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService{

    //default Home
    getDefaultHome(){
        return localStorage.getItem('default_home');
    }

    setDefaultHome(item:string){
        localStorage.setItem('default_home',item);
        return;
    }

    //Token
    getToken(){
        return localStorage.getItem('token');
    }

    setToken(token:string){
        localStorage.setItem('token',token);
    }


    //User Details
    setUser(user:any){
        localStorage.setItem('user',user);
    }
    getUser(){
        return localStorage.getItem('user');
    }

}