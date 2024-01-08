import { PartialType } from '@nestjs/mapped-types';
import { CreateStashItemDto } from './create-stash_item.dto';

export class UpdateStashItemDto extends PartialType(CreateStashItemDto) {}
