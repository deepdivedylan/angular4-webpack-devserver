import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";
import {User} from "../classes/user";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
	templateUrl: "./templates/user.detail.html"
})

export class UserDetailComponent implements OnInit {
	user : User = null;

	constructor(protected userService: UserService, protected route: ActivatedRoute) {}

	ngOnInit() : void {
		this.route.params
			.switchMap((params : Params) => this.userService.getUserByUserId(+params["userId"]))
			.subscribe(user => this.user = user);
	}
}