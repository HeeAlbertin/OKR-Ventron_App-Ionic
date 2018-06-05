export  class  Team {
    name: string;
    cod: string;
    crestUrl: string;
    teams: Object;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);    
    }
}