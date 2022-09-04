var fs = require("fs");

import WSClient from './wsClient';

class WsDataService {

    private client: WSClient;
    private fileStoragePath: string = __dirname+'../../../../db/db.json';

    constructor() {
        this.client = WSClient.getInstance();
    }

    public openConnection() {
        this.client.ws.on('open', () => {
            // check if file exists
            // fs.exists(this.fileStoragePath, (exists: any) => {
            //     if (exists) {
            //         fs.readFile(this.fileStoragePath, (err: any, data: any) => {
            //             if (err) console.log('error', JSON.parse(err));
                        
            //             // check if file contains data
            //             if ( Object.keys(JSON.parse(data)).length < 1 ) {
            //                 console.log('file storage is empty, trigerring recovery\n');
            //                 // if file is not present fetch and save recovery event data
            //                 this.sendRecovery();
            //             }
            //         });
            //     } else // if file is not present fetch and save recovery event data
            //         this.sendRecovery();
            // })
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