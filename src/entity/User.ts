import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import {json} from "express";
import {Review} from "./Review";
// import {Photo} from "./Photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: 20})
    nickname: string;

    @Column({length: 20})
    password: string;

    @OneToMany(() => Review, review => review.user)
    review: Review;
    // @OneToMany(() => Photo, photo => photo.user)
    // photos: Photo[];

    // @OneToOne(() => Answer, answer => answer.user)
    // @JoinColumn()
    // answer: Answer;
}