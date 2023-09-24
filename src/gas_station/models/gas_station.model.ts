import { Column, DataType, Model, Table } from "sequelize-typescript";


interface Gas_stationCreationAttr{
    name: string;
}

@Table({tableName: "Gas_station"})
export class Gas_station extends Model<Gas_station, Gas_stationCreationAttr>{
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