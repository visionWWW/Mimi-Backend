import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {json} from "express";
import {User} from "./User";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    grade: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}