import { Injectable } from '@nestjs/common';
import { CreateStashItemDto } from './dto/create-stash_item.dto';
import { UpdateStashItemDto } from './dto/update-stash_item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStashItemsDto } from './dto/create-stash_items.dto';

@Injectable()
export class StashItemService {
  constructor(private prisma: PrismaService) {}
  create(createStashItemDto: CreateStashItemDto) {
    return this.prisma.stashItem.create({ data: createStashItemDto });
  }

  createMany(createStashItemsDto: CreateStashItemsDto) {
    return this.prisma.stashItem.createMany({
      data: createStashItemsDto.items,
    });
  }

  findAll() {
    return this.prisma.stashItem.findMany();
  }

  findOne(id: number) {
    return this.prisma.stashItem.findUnique({ where: { id: id } });
  }

  update(id: number, updateStashItemDto: UpdateStashItemDto) {
    return this.prisma.stashItem.update({
      where: { id: id },
      data: updateStashItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.stashItem.delete({ where: { id: id } });
  }
}
