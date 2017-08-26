import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {UserComponent} from "./components/user.component";
import {SessionService} from "./services/session.service";
import {UserService} from "./services/user.service";
import {UserDetailComponent} from "./components/user.detail.component";


export const allAppComponents = [HomeComponent, UserComponent, UserDetailComponent];

export const routes: Routes = [
	{path: "user/:userId", component: UserDetailComponent},
	{path: "users", component: UserComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [SessionService, UserService];

export const routing = RouterModule.forRoot(routes);