export  class  Competitions {
    id: number;
    caption: string;
    year: string;
    numberOfMatchdays: number;
    numberOfTeams: number;
    numberOfGames: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);    
    }
}