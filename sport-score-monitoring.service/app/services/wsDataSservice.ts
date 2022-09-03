import WSClient from './wsClient';

class WsDataService {

    private client: WSClient;

    constructor() {
        this.client = WSClient.getInstance();
    }

    public openConnection() {
        this.client.ws.on('open', () => {
            console.log('on open');
            this.sendRecovery();
        });
    }

    public sendRecovery() {
        // send recovery messa
        this.client.ws.send(JSON.stringify({ "type": "recovery" }));
        console.log('recovery sent')
    }

    public onConnectionClosed() {
        this.client.ws.on('close', () => {
            console.log('on close');
        });
    }

    public onMessage(callBack: (data: any) => any){
        this.client.ws.on('message', callBack);
    }

    public closeConnection() {
        this.client.ws.close();
    }
}


export default WsDataService;