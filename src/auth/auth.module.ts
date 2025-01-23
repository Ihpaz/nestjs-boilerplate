import { Module } from '@nestjs/common';
import { MenuController } from 'src/menu/menu.controller';
import { MenuService } from 'src/menu/menu.service';
import { RoleController } from 'src/role/role.controller';
import { RoleService } from 'src/role/role.service';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
    controllers:[UserController,MenuController,RoleController],
    providers: [UserService,MenuService,RoleService],
})
export class AuthModule {}
