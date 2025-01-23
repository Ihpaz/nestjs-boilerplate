import { RoleToMenu } from "src/role/entities/roleToMenu.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"

export class Menu {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    uuid:string

    @Column()
    path:string

    @Column()
    icon:string

    @Column()
    parentId:number

    @Column()
    priority:number

    @Column()
    createdBy:number

    @Column()
    editedBy:number

    @OneToMany(() => RoleToMenu, (roleToMenu) => roleToMenu.menu)
    roleToMenu: RoleToMenu[]
   
}
