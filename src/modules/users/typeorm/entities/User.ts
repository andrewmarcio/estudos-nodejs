import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({
        nullable: true
    })
    avatar: string

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}

export default User;