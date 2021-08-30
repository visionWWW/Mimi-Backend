import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    grade: number;

    @Column({length: 100})
    explain: string;

    @Column({type: 'text'})
    photo: string;

}