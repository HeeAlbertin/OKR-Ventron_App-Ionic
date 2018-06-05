export  class  Player {
    name: string;
    jerseyNumber: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);    
    }
}