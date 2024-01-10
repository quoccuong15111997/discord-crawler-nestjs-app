import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateItemByNameDto } from './dto/update-item-by-name.dto';

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
        updatedAt: true,
      },
      orderBy: {
        id: 'asc',
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
  async updateItemByName(updateItemByNameDto: UpdateItemByNameDto) {
    var itemCheck = await this.prisma.poeItem.findMany({
      where: {
        name: updateItemByNameDto.name,
      },
    });
    if (itemCheck.length == 0) {
      return this.prisma.poeItem.create({
        data: updateItemByNameDto,
      });
    } else {
      itemCheck[0].price = updateItemByNameDto.price;
      itemCheck[0].updatedAt = updateItemByNameDto.date;
      return this.prisma.poeItem.update({
        where: {
          id: itemCheck[0].id,
        },
        data: itemCheck[0],
      });
    }
  }
  remove(id: number) {
    return this.prisma.poeItem.delete({ where: { id: id } });
  }
}
