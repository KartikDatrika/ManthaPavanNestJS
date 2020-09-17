import { Injectable, HttpException, HttpService, HttpStatus, NotFoundException } from '@nestjs/common';
import { CoffeeDto, CreateCoffeeDto, UpdateCoffeeDto } from 'src/dto/coffee-dto';

@Injectable()
export class CoffeesService {


    private coffees: CreateCoffeeDto[] = [
        {
            id: 1,
            name: "name1",
            brand: "brand1",
            flavours:["f1"]
        },
        {
            id: 2,
            name: "name2",
            brand: "brand2",
            flavours: ["f2"]
        },
    ];

    findAll(): CreateCoffeeDto[] {
        return this.coffees;    
    }

    findOne(id: string): CreateCoffeeDto{
        const selected =  this.coffees.find(coffee => coffee.id === +id);
        if(!selected){
            throw new NotFoundException(`${id}`);
        }
        return selected;
    }

    create(coffee :CreateCoffeeDto): CreateCoffeeDto{
        let id = this.coffees.length;
        coffee.id = ++id;
        this.coffees.push(coffee);
        return coffee;
    }

    update(id: string, coffee: UpdateCoffeeDto): UpdateCoffeeDto{
        let existingCoffee = this.findOne(id);
        let existingCoffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        this.coffees[existingCoffeeIndex] = { ...existingCoffee, ...coffee }
        return coffee;
    }

    remove(id: string): UpdateCoffeeDto{
        let existingCoffee = this.findOne(id);
        let existingCoffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        this.coffees.splice(existingCoffeeIndex, 1);
        return existingCoffee;
    }

}
