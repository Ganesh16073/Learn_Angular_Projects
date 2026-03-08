import { environment } from "../../environments/environment";

export class AppConstants {
    static readonly API_URL = `http://${environment.credentials.clientHost}:${environment.credentials.clientPort}/api`
    static readonly LOGIN_URL = `${AppConstants.API_URL}/login`;
    static readonly REGISTER_URL = `${AppConstants.API_URL}/register`;
}