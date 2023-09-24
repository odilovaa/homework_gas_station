import { Column, DataType, Model, Table } from "sequelize-typescript";


interface Fuel_typesCreationAttr{
    name: string;
}

@Table({tableName: "Fuel_types"})
export class Fuel_types extends Model<Fuel_types, Fuel_typesCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string;
}