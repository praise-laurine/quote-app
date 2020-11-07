export class Quote {
    // id:number;
    // quoteName:string;
    // description:string;

    showDescription: boolean;
    constructor(public id: number,public quoteName: string,public description: string){
        this.showDescription=false;
    }
}
