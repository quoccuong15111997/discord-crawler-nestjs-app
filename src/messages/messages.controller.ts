import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { UpdateStashItemDto } from 'src/stash_item/dto/update-stash_item.dto';
import { UpdateMessageStashItemDto } from './dto/update-message-stash-item.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    return this.messagesService.findAll(page, pageSize);
  }
  @Get('search')
  async search(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
    @Query('fromDate') fromDate: Date = new Date('2023-01-01'),
    @Query('toDate') toDate: Date = new Date(),
    @Query('content') content: string = '',
    @Query('mostValuable') mostValuable: string = '',
    @Query('ign') ign: string = '',
    @Query('priceFrom') priceFrom: number = 0,
    @Query('priceTo') priceTo: number = 200,
    @Query('ischeck') ischeck: boolean = false,
    @Query('channelId') channelId: string = '',
  ) {
    return this.messagesService.search(
      page,
      pageSize,
      fromDate,
      toDate,
      content,
      mostValuable,
      ign,
      priceFrom,
      priceTo,
      channelId,
    );
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(id, updateMessageDto);
  }
  @Post('update-stash')
  updateStashItem(@Body() updateMessageDto: UpdateMessageStashItemDto) {
    return this.messagesService.updateStashItem(updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
