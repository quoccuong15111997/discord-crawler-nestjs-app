import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';
import { StashItemModule } from './stash_item/stash_item.module';

@Module({
  imports: [PrismaModule, MessagesModule, AuthModule, ItemsModule, StashItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
