import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Restaurant} from "./Restaurant";
import {User} from "./User";
import {Hashtag} from "./Hashtag";

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

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToMany(() => Hashtag, hashtag =>hashtag.id)
    @JoinTable()
    hashtag: Hashtag[];

    @OneToOne(() => Restaurant, restaurant => restaurant.id)
    @JoinColumn()
    restaurant: Restaurant;

}