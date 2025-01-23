import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
import { Menu } from "src/menu/entities/menu.entity";

@Entity()
export class RoleToMenu {
    @PrimaryGeneratedColumn()
    id:number;
     
    @Column()
    uuid:string

    @Column()
    isDelete:boolean;

    @Column()
    isEdit:boolean;

    @Column()
    isShow:boolean;

    @Column()
    isCreate:boolean;

    @ManyToOne(() => Role, (role) => role.roleToMenu)
    role: Role

    @ManyToOne(() => Menu, (menu) => menu.roleToMenu)
    menu: Menu
}
