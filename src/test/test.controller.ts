import { Controller, Post } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { TestEntity } from "./test.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TestService } from "./test.service";

@Controller('test')
export class TestController extends BaseController<TestEntity> {
    constructor(private readonly testService: TestService) {
        super(testService)
    }
    @Post('/login')
    async sigin(){
        return this.testService.sigin();
    }
}