import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Board} from "./Board";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @ManyToOne(type => Board, board => board.comments, {onDelete: 'CASCADE', onUpdate: "CASCADE"})
    board: Board;
}