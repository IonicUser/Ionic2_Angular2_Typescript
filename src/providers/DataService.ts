import {Injectable} from '@angular/core';
import { HttpServ } from './HttpServ';


@Injectable()
export class DataService{

    constructor(private ht:HttpServ){}

    getData(url,successCallBack,errorCallBack){
       this.ht.getMe(url)
       .subscribe((data)=>{
            successCallBack(data);
       },(error)=>{
           errorCallBack();
       });
    }
    
    postData(url,jsonObj,successCallBack,errorCallBack){
        this.ht.postMe(url,jsonObj)
        .subscribe((data)=>{
            successCallBack(data);
       },(error)=>{
           errorCallBack(error);
       });
    }
    putData(url,jsonObj,successCallBack,errorCallBack){
       this.ht.putMe(url,jsonObj)
        .subscribe((data)=>{
            successCallBack(data);
       },(error)=>{
           errorCallBack(error);
       });
    }

    //get REQUESTS go here
    getUserHomes(successCallBack,errorCallBack){
    let def = localStorage.getItem('default_home');
        this.getData('homes/myhomes',(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getUserRooms(successCallBack,errorCallBack){
    let def = localStorage.getItem('default_home');
        this.getData('rooms/allmyrooms',(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getHomesRooms(str,successCallBack,errorCallBack){
    let def = localStorage.getItem('default_home');
        this.getData('rooms/myrooms?home='+str,(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getJoinRequests(successCallBack,errorCallBack){
        this.getData('homes/my_home_join_requests',(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getSearchHome(str,successCallBack,errorCallBack){
        this.getData('homes/search_home_basic?home='+str,(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getSboards(str,successCallBack,errorCallBack){
        this.getData('sboards/mysboards?home='+str,(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getIrAppliances(str,successCallBack,errorCallBack){
        this.getData('ir_appliances?home='+str,(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getBrands(str,successCallBack,errorCallBack){
        this.getData('appliances/type/'+str,(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }
    getTestCodeSets(str1,str2,successCallBack,errorCallBack){
        this.getData('appliances/test_codeset?brand='+str1+'&type='+str2,(data) =>{
            return successCallBack(data);
            },(error)=>{
            return errorCallBack(error);
        });
    }


   //post REQUESTS go here
    postEmailForgotPassword(obj,successCallBack,errorCallBack){
        this.putData('user/authenticate/forgot_password',obj,(data)=>{
                    return successCallBack(data);
        },(error)=>{
                    return errorCallBack(error);
        })
    }
    postUpdatePassword(obj,successCallBack,errorCallBack){
         this.postData('users/update_password',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
    postCheckExisting(obj,successCallBack,errorCallBack){
         this.postData('homes/check_existing',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
    postCreateHome(obj,successCallBack,errorCallBack){
         this.postData('homes/new',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
     postEditHome(obj,successCallBack,errorCallBack){
         this.postData('homes/myhomes',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
     postDeleteHome(obj,successCallBack,errorCallBack){
         this.postData('homes/myhomes/delete',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
    postCreateWifiRouter(obj,successCallBack,errorCallBack){
         this.postData('homes/wifi',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
     postEditWifiRouter(obj,successCallBack,errorCallBack){
         this.postData('homes/wifi',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
    postDeleteWifiRouter(obj,successCallBack,errorCallBack){
         this.postData('homes/wifi',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
     postJoinRequest(obj,successCallBack,errorCallBack){
         this.postData('homes/request_join',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
     postApproveJoinRequest(obj,successCallBack,errorCallBack){
         this.postData('homes/my_home_join_requests',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
     postRemoveUser(obj,successCallBack,errorCallBack){
         this.postData('homes/remove_user',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }
    postCreateRoom(obj,successCallBack,errorCallBack){
         this.postData('rooms/new',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }


  postDeviceevents(obj,successCallBack,errorCallBack){
         this.postData('deviceevents/switch',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }

     postEditIrApp(obj,successCallBack,errorCallBack){
         this.postData('deviceevents/',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }

     postDeleteIrApp(obj,successCallBack,errorCallBack){
         this.postData('deviceevents/',obj,
         (data)=>{
             return successCallBack(data);
         },(error)=>{
             return errorCallBack(error);
         })
    }


//put REQUESTS go here
    putEditProfile(obj,successCallBack,errorCallBack){
            this.putData('users/me',obj,(data) =>{
                return successCallBack(data);
                },(error)=>{
                return errorCallBack(error);
        });
    }   


}