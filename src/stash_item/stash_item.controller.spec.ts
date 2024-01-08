import { Test, TestingModule } from '@nestjs/testing';
import { StashItemController } from './stash_item.controller';
import { StashItemService } from './stash_item.service';

describe('StashItemController', () => {
  let controller: StashItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StashItemController],
      providers: [StashItemService],
    }).compile();

    controller = module.get<StashItemController>(StashItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
