import { Test, TestingModule } from '@nestjs/testing';
import { StashItemService } from './stash_item.service';

describe('StashItemService', () => {
  let service: StashItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StashItemService],
    }).compile();

    service = module.get<StashItemService>(StashItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
