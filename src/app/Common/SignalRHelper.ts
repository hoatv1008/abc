
import { ApiConfiguration } from '../api-configuration';

declare var jQuery: any;
declare var $: any;
export class SignalRHelper {
   
    static initSignalR(url, tokent): void {
         abp.signalr = {
            autoConnect: true,
            connect: undefined,
            hubs: undefined,
            qs: ApiConfiguration.authorization.encrptedAuthTokenName + "=" + encodeURIComponent(localStorage.getItem('enc_auth_token')),
            remoteServiceBaseUrl: url,
            startConnection: undefined,
            url: '/signalr'
        };
        jQuery.getScript(ApiConfiguration.baseUrl + '/assets/abp.signalr-client.js');
    }
}