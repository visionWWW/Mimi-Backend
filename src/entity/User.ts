import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {json} from "express";
// import {Photo} from "./Photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    nickname: string;

    @Column()
    password: number;

    // @OneToMany(() => Photo, photo => photo.user)
    // photos: Photo[];
}