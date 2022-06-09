import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceNumberController } from './invoice-number.controller';
import { InvoiceNumberService } from './invoice-number.service';

describe('InvoiceNumberController', () => {
  let controller: InvoiceNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceNumberController],
      providers: [InvoiceNumberService],
    }).compile();

    controller = module.get<InvoiceNumberController>(InvoiceNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
