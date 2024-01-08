import { PoeItem } from '@prisma/client';

export class CreateItemDto {
  name: string;
  type: string;
  price: number;
}
