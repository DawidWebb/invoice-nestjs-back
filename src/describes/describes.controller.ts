import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddDescribeValidationPipe } from 'src/pipes/add-describe-validation.pipe';

import { DescribesService } from './describes.service';
import { CreateDescribeDto } from './dto/create-describe.dto';
import { UpdateDescribeDto } from './dto/update-describe.dto';

@Controller('describe')
export class DescribesController {
  constructor(private readonly describesService: DescribesService) {}

  @Post()
  create(@Body(AddDescribeValidationPipe) createDescribeDto: CreateDescribeDto) {
    return this.describesService.create(createDescribeDto);
  }

  @Get()
  findAll() {
    return this.describesService.findAll();
  }


}
