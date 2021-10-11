import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {json} from "express";
// import {Photo} from "./Photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: 20})
    email: string;

    @Column()
    password: number;

    // @OneToMany(() => Photo, photo => photo.user)
    // photos: Photo[];

    // @OneToOne(() => Answer, answer => answer.user)
    // @JoinColumn()
    // answer: Answer;
}