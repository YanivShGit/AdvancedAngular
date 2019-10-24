import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable( { providedIn : "root"} )
export class UsersProxyService {

    constructor(private http: HttpClient ) {
    }

    getUsers(num:number = 1) : Promise<ev.User[]>{
        return this.http.get<ev.UsersRequest>(`https://randomuser.me/api/?results=${num}`)
            .pipe(
                map( req => req.results )
            )
            .toPromise();
    }

}