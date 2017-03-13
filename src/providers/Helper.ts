import{ Injectable } from '@angular/core';

@Injectable()
export class Helper{

    constructor(){

    }

    isEmpty(param){
            if(Array.isArray(param)){
                if(param.length == 0){
                    return true;
                }
                else return false;
            }
            else {
                if(param==""||param=="undefined"||param=="null"||param==null||JSON.stringify(param)=="[]"){
                    return true;
                }
                else return false;
            }

    }


}