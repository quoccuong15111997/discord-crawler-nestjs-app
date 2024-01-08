import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}
  create(createItemDto: CreateItemDto) {
    return this.prisma.poeItem.create({ data: createItemDto });
  }

  findAll() {
    return this.prisma.poeItem.findMany();
  }
  findByType(type: string) {
    return this.prisma.poeItem.findMany({
      where: {
        type: type,
      },
      select: {
        id: true,
        name: true,
        price: true,
      },
    });
  }
  findOne(id: number) {
    return this.prisma.poeItem.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.poeItem.update({
      where: {
        id: id,
      },
      data: updateItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.poeItem.delete({ where: { id: id } });
  }
}
