import { Test, TestingModule } from '@nestjs/testing';
import { DescribesService } from './describes.service';

describe('DescribesService', () => {
  let service: DescribesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescribesService],
    }).compile();

    service = module.get<DescribesService>(DescribesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
