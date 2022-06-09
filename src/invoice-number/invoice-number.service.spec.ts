import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceNumberService } from './invoice-number.service';

describe('InvoiceNumberService', () => {
  let service: InvoiceNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceNumberService],
    }).compile();

    service = module.get<InvoiceNumberService>(InvoiceNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
