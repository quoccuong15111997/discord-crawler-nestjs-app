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
  isEvaluate?: boolean;
  usedBy?: string;
  pmLogs?: string;
  valuePrice?: string;
  attachment?: string;
  channelId?: string;
  channelName?: string;
  evaluateResult?: string;
}
