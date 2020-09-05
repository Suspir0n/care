import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class baseEntity {
    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column({ default: true })
    active: boolean;

    @Column({ default: false })
    deleted: boolean;

    @CreateDateColumn({ type: "timestamp" })
    createAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}