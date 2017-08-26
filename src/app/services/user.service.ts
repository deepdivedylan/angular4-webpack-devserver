import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base.service";
import {User} from "../classes/user";

@Injectable()
export class UserService extends BaseService {

	constructor(protected http : Http) {
		super(http);
	}

	private userUrl = "https://jsonplaceholder.typicode.com/users/";

	getAllUsers() : Observable<User[]> {
		return(this.http.get(this.userUrl)
			.map(this.extractAll)
			.catch(this.handleError));
	}

	getUserByUserId(userId : number) : Observable<User> {
		return(this.http.get(this.userUrl + userId)
			.map(this.extractAll)
			.catch(this.handleError));
	}
}