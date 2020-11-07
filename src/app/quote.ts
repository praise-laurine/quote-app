export class Quote {
    // id:number;
    // quoteName:string;
    // description:string;

    public showDescription: boolean;
    constructor(public id: number,public quoteName: string,public description: string,public completeDate: Date){
        this.showDescription=false;
    }
}
