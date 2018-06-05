export  class  Team {
    name: string;
    cod: string;
    crestUrl: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);    
    }
}