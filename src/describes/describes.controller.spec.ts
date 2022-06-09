import { Test, TestingModule } from '@nestjs/testing';
import { DescribesController } from './describes.controller';
import { DescribesService } from './describes.service';

describe('DescribesController', () => {
  let controller: DescribesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescribesController],
      providers: [DescribesService],
    }).compile();

    controller = module.get<DescribesController>(DescribesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
