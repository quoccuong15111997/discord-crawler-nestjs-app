import { MessageContent } from '@prisma/client';

export class CreateMessageDto {
  id: string;
  content: string;
  ign: string;
  mostValuable: string;
  askingPrice: number;
  timestamp: Date;
  authorId: string;
  authorName: string;
  authorNickname: string;
  isBot: boolean;
  usedBy?: string;
  pmLogs?: string;
}
