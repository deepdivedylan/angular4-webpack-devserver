import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {UserComponent} from "./components/user.component";
import {SessionService} from "./services/session.service";
import {UserService} from "./services/user.service";


export const allAppComponents = [HomeComponent, UserComponent];

export const routes: Routes = [
	{path: "user", component: UserComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [SessionService, UserService];

export const routing = RouterModule.forRoot(routes);