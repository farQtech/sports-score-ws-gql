import WebSocket from 'ws';

class WSClient {
    private static _instance: WSClient;

    public ws: WebSocket; 
    
    private constructor() { 
        this.ws = new WebSocket('wss://sb-ws-mock-api.herokuapp.com/?username=ikram&password=secret15');
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new WSClient();
        return this._instance;
    }
}

export default WSClient;