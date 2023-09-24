import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_station_branch } from './models/gas_station_branch.model';
import { CreateGas_station_branchDto } from './dto/create-gas_station_branch.dto';
import { UpdateGas_station_branchDto } from './dto/update-gas_station_branch.dto';

@Injectable()
export class GasStationBranchService {
    constructor(@InjectModel(Gas_station_branch) private gas_station_branchRepo: typeof Gas_station_branch){}

    async createGas_station_branch(createGas_station_branchDto: CreateGas_station_branchDto) :Promise<Gas_station_branch>{
        const gas_station_branch = await this.gas_station_branchRepo.create(createGas_station_branchDto);
        return gas_station_branch;
    }

    async findAllGas_station_branch() :Promise<Gas_station_branch[]>{
        return this.gas_station_branchRepo.findAll()
    }

    async findByID(id: number) :Promise<Gas_station_branch>{
        const gas_station_branch = await this.gas_station_branchRepo.findByPk(id)
        return gas_station_branch;
    }

    async findByName(branch_name: string) :Promise<Gas_station_branch>{
        const gas_station_branch = await this.gas_station_branchRepo.findOne({where: {branch_name}});
        return gas_station_branch;
    }

    async updateById(id: number, updateGas_station_barnchDto: UpdateGas_station_branchDto) :Promise<Gas_station_branch>{
        const gas_station_branch = await this.gas_station_branchRepo.update(updateGas_station_barnchDto,{
            where: {id},
            returning: true
        });
        return gas_station_branch[1][0]
    }

    async deleteById(id: number) :Promise<number>{
        const gas_station_branch = await this.gas_station_branchRepo.destroy({where: {id}})
        return gas_station_branch;
    }
}
