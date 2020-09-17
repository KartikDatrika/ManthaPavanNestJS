import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeeDto, CreateCoffeeDto, UpdateCoffeeDto } from 'src/dto/coffee-dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeservice: CoffeesService){

    }

    @Get()
    findAll(): CreateCoffeeDto[]{
        return this.coffeeservice.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id:string): CreateCoffeeDto{
        return this.coffeeservice.findOne(id);
    }

    @Post()
    create(@Body() coffee: CreateCoffeeDto): CreateCoffeeDto{
        return this.coffeeservice.create(coffee);
    }

    @Patch(':id')
    update(@Param('id')id:string, @Body()coffee:UpdateCoffeeDto): UpdateCoffeeDto{
        return this.coffeeservice.update(id, coffee);
    }

    @Delete(':id')
    remove(@Param('id') id: string): UpdateCoffeeDto{
        return this.coffeeservice.remove(id);
    }
}
