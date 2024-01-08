import { Module } from '@nestjs/common';
import { StashItemService } from './stash_item.service';
import { StashItemController } from './stash_item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StashItemController],
  providers: [StashItemService],
  imports: [PrismaModule],
})
export class StashItemModule {}
