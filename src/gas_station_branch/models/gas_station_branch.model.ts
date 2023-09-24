import { Column, DataType, Model, Table } from "sequelize-typescript";


interface Gas_station_branchCreationAttr{
    branch_name: string;
    address: string;
    locatilon: string;
    phone_number: string;
}

@Table({tableName: "Gas_station_branch"})
export class Gas_station_branch extends Model<Gas_station_branch, Gas_station_branchCreationAttr>{
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
    branch_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    locatilon: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        unique: true
    })
    phone_number: string;
}
