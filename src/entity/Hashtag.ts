import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Hashtag {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: 20})
    name: string;
}