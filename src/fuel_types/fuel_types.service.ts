import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Fuel_types } from './models/fuel_types.model';
import { CreateFuel_typesDto } from './dto/create-fuel_types.dto';
import { UpdateFuel_typesDto } from './dto/update-gas_fuel.dto';


@Injectable()
export class FuelTypesService {
    constructor(@InjectModel(Fuel_types) private fuel_typesRepo: typeof Fuel_types){}

    async createFuel_types(createFuel_typesDto: CreateFuel_typesDto) :Promise<Fuel_types>{
        const fuel_types = await this.fuel_typesRepo.create(createFuel_typesDto);
        return fuel_types;
    }

    async findAllFuel_types() :Promise<Fuel_types[]>{
        return this.fuel_typesRepo.findAll()
    }

    async findByID(id: number) :Promise<Fuel_types>{
        const fuel_types = await this.fuel_typesRepo.findByPk(id)
        return fuel_types;
    }

    async findByName(name: string) :Promise<Fuel_types>{
        const fuel_types = await this.fuel_typesRepo.findOne({where: {name}});
        return fuel_types;
    }

    async updateById(id: number, updateFuel_typesDto: UpdateFuel_typesDto) :Promise<Fuel_types>{
        const fuel_types = await this.fuel_typesRepo.update(updateFuel_typesDto,{
            where: {id},
            returning: true
        });
        return fuel_types[1][0]
    }

    async deleteById(id: number) :Promise<number>{
        const fuel_types = await this.fuel_typesRepo.destroy({where: {id}})
        return fuel_types;
    }
}
