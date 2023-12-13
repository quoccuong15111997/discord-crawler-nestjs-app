import { MessageContent } from '@prisma/client';

export class CreateMessagesDto {
  messages: MessageContent[];
}
