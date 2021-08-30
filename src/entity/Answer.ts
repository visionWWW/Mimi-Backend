import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {json} from "express";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    grade: string;

}