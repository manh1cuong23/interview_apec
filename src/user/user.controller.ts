import { Controller, Post } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "./User.service";

@Controller('User')
export class UserController extends BaseController<UserEntity> {
    constructor(private readonly UserService: UserService) {
        super(UserService)
    }
    @Post('/login')
    async sigin(){
        return this.UserService.sigin();
    }
}