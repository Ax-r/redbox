import { create } from 'apisauce';

export class ApiService {
    constructor() {
        this.defaultHeader = { 'Content-Type': 'application/json', Accept: 'application/json' }
        this.request = create({})
    }

    set baseUrl(url) {
        this.request.setBaseURL(url)
    }

    set headers(hdr) {
        let newHeader = (hdr) ? hdr : this.defaultHeader
        this.request.setHeaders(newHeader)
    }

    _POST(path, data) {
        return this.request.post(path, data)
    }

    _GET(path) {
        return this.request.get(path)
    }

}