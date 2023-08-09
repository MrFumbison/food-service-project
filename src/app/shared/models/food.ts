export class food {
    id!: number;
    name!: string;
    price!:number;
    tags?: string[];
    favorite:boolean =false;
    stars: number = 0;
    imageurl!: string;
    origins!: string[];
    cooktime!: string;
}