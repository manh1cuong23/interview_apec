import { TypeOrmModule } from "@nestjs/typeorm";
import { TestEntity } from "./test.entity";
import { TestService } from "./test.service";
import { Module } from "@nestjs/common";
import { TestController } from "./test.controller";

@Module({
    imports: [TypeOrmModule.forFeature([TestEntity])],
    controllers: [TestController],
    providers: [TestService],
})
export class TestModule {}