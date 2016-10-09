import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '0fcdc36f4c2f29952753';
    private client_secret = 'b4af2cc81f3d57123e19ba1d967657941e921f7b';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }

}
