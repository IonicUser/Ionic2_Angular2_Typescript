import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './LocalStorageService';

@Injectable()
export class HttpServ {
    token: string;
    url: string;
    baseUrl: string;
    opt1: RequestOptions;
    headers;
    myHeaders: Headers = new Headers;
    public API_ENDPOINT: string;
    constructor(private http: Http, private ls: LocalStorageService) {
        this.API_ENDPOINT = 'http://test.com:3002/';
        this.baseUrl = 'http://test.com:3002/api/v1/';
        this.myHeaders.append('Content-type', 'application/json');
        // this.token = this.ls.getToken();
        // console.log(this.token);
        // this.myHeaders.set('Authorization', 'Bearer '+this.token);
        // this.myHeaders.append('Content-type', 'application/json');
        // console.log(this.myHeaders);
        // this.opt1 = new RequestOptions({
        //     headers: this.myHeaders
        // });
    }

    getMe(url: any) {
        this.getTokens();
        return this.http.get(this.baseUrl + url, this.opt1).map((res: Response) => res.json());
    }

    postMe(url, jsonObj) {
        this.getTokens();
        return this.http.post(this.baseUrl + url, jsonObj, this.opt1).map((res: Response) => res.json());
    }
    putMe(url, jsonObj) {
        this.getTokens();
        return this.http.put(this.baseUrl + url, jsonObj, this.opt1).map((res: Response) => res.json());
    }
    getTokens() {
        let token = this.ls.getToken();
        this.myHeaders.set('Authorization', 'Bearer ' + token);
        this.opt1 = new RequestOptions({
            headers: this.myHeaders
        });
    }
    /**
     * This method for User Login with valid credentials
     */
    public userLogin(data: any) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let loginURL = this.API_ENDPOINT + 'user/authenticate';
        return this.http.post(loginURL, data, { headers: this.headers }).map((response: Response) => response.json());
    }
    // http://staging.feturtles.com:3002/api/v1/sboards/addswitch

    /**
* This method for updating/editing switch
*/
    public updateSwitch(data: any) {
        this.getTokens();
        let updateSwitchURL = this.baseUrl + 'sboards/switch';
        return this.http.post(updateSwitchURL, data, this.opt1).map((response: Response) => response.json());
    }

    /**
  * This method for updating switch board data
  */
    public updateSwitchBoard(data: any) {
        this.getTokens();
        let updateSwitchURL = this.baseUrl + 'sboards/sboard';
        return this.http.post(updateSwitchURL, data, this.opt1).map((response: Response) => response.json());
    }

    /**
* This method for deleting switch board data
*/
    public deleteSwitchBoard(data: any) {
        this.getTokens();
        let updateSwitchURL = this.baseUrl + 'sboards/sboard/delete';
        return this.http.post(updateSwitchURL, data, this.opt1).map((response: Response) => response.json());
    }


}
