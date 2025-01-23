import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleToMenu } from "./roleToMenu.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id:number;
     
    @Column()
    uuid:string

    @Column()
    name:string;

    @ManyToOne(() => User, (user) => user.roles)
    user: User

    @OneToMany(() => RoleToMenu, (roleToMenu) => roleToMenu.role)
    roleToMenu: RoleToMenu[]
}
