import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Comment} from './Comment';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    title: string;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToMany(type => Comment, comment => comment.board)
    comments: Comment[];
}