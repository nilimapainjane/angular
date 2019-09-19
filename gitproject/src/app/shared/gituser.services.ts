

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IgitUser} from '../model/gitusers'
import {Observable} from 'rxjs'

@Injectable ({providedIn:'root'})

export class GitUsersData
{
    constructor(private http:HttpClient){}

    // public gituserEndpoint:string='https://api.github.com/users/octocat'

    // public gituserfollowers:string='https://api.github.com/users/octocat/followers';
    public gituserEndpoint:string;
    public gituserfollowers

    getusername(name:string){

        this.gituserfollowers='https://api.github.com/users/'+ name +'/followers';
        //alert(this.gituserfollowers);
        this.gituserEndpoint='https://api.github.com/users/'+name;
        //alert(this.gituserEndpoint);

    }

    Followersdata():Observable<IgitUser[]>
    {
        return this.http.get<IgitUser[]>(this.gituserfollowers);
    }

      
    GitUserdata():Observable<IgitUser[]>
    {
       return this.http.get<IgitUser[]>(this.gituserEndpoint);
    }
    
}