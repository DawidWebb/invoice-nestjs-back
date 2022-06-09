import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDescribeDto } from './dto/create-describe.dto';
import { UpdateDescribeDto } from './dto/update-describe.dto';
import { Describe } from './schema/describe.schema';

@Injectable()
export class DescribesService {

  constructor(
    @InjectModel(Describe.name) private describeSchema: Model<Describe>
  ) {}

  async create(createDescribeDto: CreateDescribeDto) {
    const addedDescribeItem = await this.describeSchema.create({
      describeName: createDescribeDto
    });

    if (!addedDescribeItem) {
      throw new InternalServerErrorException();
    } else {

      return addedDescribeItem;
    }

  }

  async findAll(): Promise<Describe[]> {
    const allDescribes = await this.describeSchema.find().exec();

    if (!allDescribes) {
      throw new InternalServerErrorException();
    } else if (!allDescribes.length) {
      throw new NotFoundException();
    } else {
      return allDescribes;
    }

  }


}
