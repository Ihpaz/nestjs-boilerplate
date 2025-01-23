import { Role } from 'src/role/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    uuid:string

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string

    @Column()
    birthDate:Date

    @Column()
    createdBy:number

    @Column()
    editedBy:number

    @OneToMany(() => Role, (role) => role.user)
    roles: Role[]
}
