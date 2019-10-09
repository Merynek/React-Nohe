import { History } from "history";
import { observable } from "mobx";
import { UserAPI } from "../api/user.api";

export class SessionStore {
    @observable private isLoggedIn: boolean = false;

    constructor(public userApi: UserAPI, public browserHistory: History, public localStorage: Storage) {}

    public login() {
        this.userApi.getToken().then((token) => {
            this.isLoggedIn = true;
            this.localStorage.setItem("token", JSON.stringify(token));
            this.browserHistory.replace("/auction");
        }).catch((error) => {
            //error
        });
    }

    public logout() {
        this.localStorage.removeItem("token");
        this.isLoggedIn = false;
    }

    public isLogged() {
        if (Boolean(this.localStorage.getItem("token")) && !this.isLoggedIn) {
            this.isLoggedIn = true;
        }
        
        return this.isLoggedIn;
    }
}
