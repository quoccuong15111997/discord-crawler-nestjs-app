import { StashItem } from '@prisma/client';

export class CreateStashItemsDto {
  items: StashItem[];
}
