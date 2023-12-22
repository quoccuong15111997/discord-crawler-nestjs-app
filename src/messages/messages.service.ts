import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { timestamp } from 'rxjs';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}
  async create(createMessageDto: CreateMessageDto) {
    // console.log(createMessageDto);
    var check = await this.prisma.messageContent.findUnique({
      where: {
        id: createMessageDto.id,
      },
    });
    if (check != null) {
      return check;
    }
    return this.prisma.messageContent.create({
      data: createMessageDto,
    });
  }
  createMany(createMessagesDto: CreateMessagesDto) {
    // console.log(createMessageDto);
    return this.prisma.messageContent.createMany({
      data: createMessagesDto.messages,
    });
  }
  async findAll(page: number = 1, pageSize: number = 10) {
    // await this.prisma.messageContent.deleteMany({});
    const skip = (page - 1) * pageSize;
    const data = await this.prisma.messageContent.findMany({
      skip,
      take: +pageSize,
      orderBy: {
        timestamp: 'desc',
      },
    });
    return data;
  }
  async search(
    page: number = 1,
    pageSize: number = 10,
    fromDate: Date = new Date('2023-01-01'),
    toDate: Date = new Date(),
    content: string = '',
    mostValuable: string = '',
    ign: string = '',
    priceFrom: number = 0,
    priceTo: number = 200,
    ischeck: boolean = false,
    channelId: string = '',
  ) {
    const skip = (page - 1) * pageSize;
    const data = await this.prisma.messageContent.findMany({
      skip,
      take: +pageSize,
      where: {
        ...(channelId != ''
          ? {
              chanelId: {
                contains: channelId,
                mode: 'insensitive',
              },
            }
          : {}),
        ...(content != ''
          ? {
              content: {
                contains: content,
                mode: 'insensitive',
              },
            }
          : {}),
        ...(mostValuable != ''
          ? {
              mostValuable: {
                contains: mostValuable,
                mode: 'insensitive',
              },
            }
          : {}),
        ...(ign != ''
          ? {
              ign: {
                contains: ign,
                mode: 'insensitive',
              },
            }
          : {}),
        ...(ischeck
          ? {
              usedBy: {
                not: '',
              },
            }
          : {}),
        timestamp: {
          lte: new Date(toDate),
          gte: new Date(fromDate),
        },
        askingPrice: {
          lte: +priceTo,
          gte: +priceFrom,
        },
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    return data;
  }
  findOne(id: string) {
    return this.prisma.messageContent.findUnique({ where: { id } });
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    try {
      return this.prisma.messageContent.update({
        where: {
          id,
        },
        data: updateMessageDto,
      });
    } catch (error) {
      return error;
    }
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
