import { CreateStashItemDto } from 'src/stash_item/dto/create-stash_item.dto';

export class UpdateMessageStashItemDto {
  id: string;
  isEvaluate?: boolean;
  evaluateResult?: string;
  items: CreateStashItemDto[];
}
