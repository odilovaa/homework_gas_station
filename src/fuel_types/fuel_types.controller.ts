import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuelTypesService } from './fuel_types.service';
import { CreateFuel_typesDto } from './dto/create-fuel_types.dto';
import { Fuel_types } from './models/fuel_types.model';
import { UpdateFuel_typesDto } from './dto/update-gas_fuel.dto';


@Controller('fuel-types')
export class FuelTypesController {
    constructor(private readonly fuelTypesService: FuelTypesService){}

    @Post('create')
    async createFuel_types(@Body() createFuel_typesDto: CreateFuel_typesDto) :Promise<Fuel_types>{
        return this.fuelTypesService.createFuel_types(createFuel_typesDto);
    }

    @Get('all')
    async findAllFuel_types() :Promise<Fuel_types[]>{
        return this.fuelTypesService.findAllFuel_types()
    }

    @Get(':id')
    async findByID(@Param("id") id: string) :Promise<Fuel_types>{
        return this.fuelTypesService.findByID(+id);
    }

    @Get('name/:name')
    async findByName(@Param("name") name: string) :Promise<Fuel_types>{
        return this.fuelTypesService.findByName(name);
    }

    @Put(':id')
    async updateById(@Param('id') id: string, @Body() updateFuel_typesDto: UpdateFuel_typesDto){
        return this.fuelTypesService.updateById(+id, updateFuel_typesDto);
    }

    @Delete(':id')
    async deleteById(@Param("id") id: string) :Promise<number>{
        return this.fuelTypesService.deleteById(+id);
    }
    
}
