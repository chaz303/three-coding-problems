interface Client {
  sendMessage: (message: string) => void; //to send messages to the Client
  onMessage: (callback: (message: string) => void) => void; //to register a callback for receiving messages from the Client
}

type RecordMap = { [recordName: string]: Client };

function listenForResponse(client: Client): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    setTimeout(() => resolve(false), 3000);
    client.onMessage(message => {
      resolve(true);
    });
  });
}

function updateRecordMap(key: string, recordMap: object, res: boolean): void {
  if (res === false) {
    delete recordMap[key];
  }
}

class RecordTracker {
  constructor(private recordMap: RecordMap) {}
  public initialize(): void {
    setInterval(() => {
      for (let key in this.recordMap) {
        let client = this.recordMap[key];
        client.sendMessage("ping");
        listenForResponse(client).then(res =>
          updateRecordMap(key, this.recordMap, res)
        );
      }
    }, 10000);
  }
  public getRecordMap(): RecordMap {
    return { ...this.recordMap };
  }
}
