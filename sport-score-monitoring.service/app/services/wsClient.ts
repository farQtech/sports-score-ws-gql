import WebSocket from 'ws';

class WSClient {
    private static _instance: WSClient;

    public ws: WebSocket; 
    
    private constructor() { 
        this.ws = new WebSocket(process.env.WS_END_POINT as string);
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