export class CoffeeDto {
    id: number;
    name: string;
    brand:string;
    flavours: string[];
}

export class CreateCoffeeDto {
    id?: number;
    name?: string;
    brand?: string;
    flavours?: string[];
}


export class UpdateCoffeeDto {
    id?: number;
    name?: string;
    brand?: string;
    flavours?: string[];
}
