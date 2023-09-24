import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_station } from './models/gas_station.model';
import { CreateGas_stationDto } from './dto/create-gas_station.dto';
import { UpdateGas_stationDto } from './dto/update-gas_station.dto';

@Injectable()
export class GasStationService {
    constructor(@InjectModel(Gas_station) private gas_stationRepo: typeof Gas_station){}

    async createGas_station(createGas_stationDto: CreateGas_stationDto) :Promise<Gas_station>{
        const gas_station = await this.gas_stationRepo.create(createGas_stationDto);
        return gas_station;
    }

    async findAllGas_station() :Promise<Gas_station[]>{
        return this.gas_stationRepo.findAll()
    }

    async findByID(id: number) :Promise<Gas_station>{
        const gas_station = await this.gas_stationRepo.findByPk(id)
        return gas_station;
    }

    async findByName(name: string) :Promise<Gas_station>{
        const gas_station = await this.gas_stationRepo.findOne({where: {name}});
        return gas_station;
    }

    async updateById(id: number, updateGas_stationDto: UpdateGas_stationDto) :Promise<Gas_station>{
        const gas_station = await this.gas_stationRepo.update(updateGas_stationDto,{
            where: {id},
            returning: true
        });
        return gas_station[1][0]
    }

    async deleteById(id: number) :Promise<number>{
        const gas_station = await this.gas_stationRepo.destroy({where: {id}})
        return gas_station;
    }
}
