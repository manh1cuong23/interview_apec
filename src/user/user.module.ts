import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./User.entity";
import { UserService } from "./User.service";
import { Module } from "@nestjs/common";
import { UserController } from "./User.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}