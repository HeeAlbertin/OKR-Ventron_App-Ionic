export  class  Player {
    name: string;
    jerseyNumber: number;
    players: Object;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);    
    }
}