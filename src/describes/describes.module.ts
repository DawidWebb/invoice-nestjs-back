import { Module } from '@nestjs/common';
import { DescribesService } from './describes.service';
import { DescribesController } from './describes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Describe, DescribeSchema } from './schema/describe.schema';

@Module({
  imports: [MongooseModule.forFeature(([{ name: Describe.name, schema: DescribeSchema }]))],
  controllers: [DescribesController],
  providers: [DescribesService]
})
export class DescribesModule {}
