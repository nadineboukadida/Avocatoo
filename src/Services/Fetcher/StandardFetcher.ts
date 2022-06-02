import * as SecureStore from 'expo-secure-store';
export class StandardFetcher{
    public static async fetch(url: string, options: RequestInit = {}) {
        console.log(url)
        const headers = await  StandardFetcher.getDefaultHeaders(options);

        return fetch(url, {...options, headers})
            .then(res => res.json())
            .then(this.handleError401)
            .catch(this.handleError)
            ;
    }
    private static handleError(error: any): null {
        console.error(error);
        return null;
    }

    private static handleError401(res: any) {
        if (!res?.code || res?.code !== 401) {
            return res;
        }

        if (res?.message && res?.message === 'Expired JWT Token') {
            const pathName = window.location;
            const host = pathName.host;
            if (host.indexOf('localhost') !== -1 || host.indexOf('127.0.0.1') !== -1) {
                console.error('Need to refresh API token');
                return res;
            } else {
                window.location.pathname = '/logout';
            }
        }

        return res;
    }
    private static async getDefaultHeaders(options: RequestInit) {
        let headers = new Headers();
        let token=await SecureStore.getItemAsync('token')
        headers.append("Authorization", 'Bearer ' + token ?? '');

        const body = options?.body;
        const isFormData = body ? (body instanceof FormData) : false;

        if (!isFormData) {
            headers.append("Content-Type", isFormData ? 'multipart/form-data' : 'application/json');
        }

        return headers;
    }
}