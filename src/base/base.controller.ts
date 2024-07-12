import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { DeepPartial } from 'typeorm';
import { BaseService } from './base.service';

@Controller('api')
export abstract class BaseController<T extends BaseEntity> {
  constructor(private readonly baseService: BaseService<T>) {}

  @Post()
  create(@Body() createCategoryDto: DeepPartial<T>) {
    return this.baseService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.baseService.findAll();
  }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.baseService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateCategoryDto: DeepPartial<T>) {
//     return this.baseService.update(+id, updateCategoryDto);
//   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.remove(+id);
  }
}
