import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {User} from "./User";
import {Hashtag} from "./Hashtag";

@Entity()
export class Review {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    grade: number;

    @Column({length: 100})
    explain: string;

    @Column({length: 100})
    restaurantName: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToMany(() => Hashtag, hashtag =>hashtag.id)
    @JoinTable()
    hashtag: Hashtag[];
}