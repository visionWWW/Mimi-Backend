import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Restaurant} from "./Restaurant";

@Entity()
export class Food {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string;

    @Column({length: 20, nullable:true})
    ingred: string;

    @Column()
    price: number;

    @ManyToOne(() => Restaurant, restaurant =>restaurant.id)
    restaurant: Restaurant;
}