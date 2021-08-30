import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string;

    @Column()
    ophours: number;

    @Column({length: 20})
    address: string;

    @Column({type: 'double'})
    latitude: number;

    @Column({type: 'double'})
    longtitude: number;


}