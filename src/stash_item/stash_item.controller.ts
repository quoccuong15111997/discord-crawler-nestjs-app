import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StashItemService } from './stash_item.service';
import { CreateStashItemDto } from './dto/create-stash_item.dto';
import { UpdateStashItemDto } from './dto/update-stash_item.dto';
import { CreateStashItemsDto } from './dto/create-stash_items.dto';

@Controller('stash-item')
export class StashItemController {
  constructor(private readonly stashItemService: StashItemService) {}

  @Post()
  create(@Body() createStashItemDto: CreateStashItemDto) {
    return this.stashItemService.create(createStashItemDto);
  }
  @Post('create-many')
  createMany(@Body() createStashItemsDto: CreateStashItemsDto) {
    return this.stashItemService.createMany(createStashItemsDto);
  }
  @Get()
  findAll() {
    return this.stashItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stashItemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStashItemDto: UpdateStashItemDto,
  ) {
    return this.stashItemService.update(+id, updateStashItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stashItemService.remove(+id);
  }
}
