import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    ManyToMany,
    JoinColumn,
    JoinTable,
    OneToMany,
    ManyToOne
} from "typeorm";
import {User} from "./User";

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

    @Column("simple-array")
    hashtag: string[];

    @ManyToOne(() => User, user => user.review)
    users: User[];

}