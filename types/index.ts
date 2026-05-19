export type Theme = "rose" | "lilac" | "wine";
export type Plan = "free" | "premium";
export type EventType = "personal" | "couple" | "anniversary" | "travel" | "other";
export type EventVisibility = "private" | "shared";
export type MemoryTag = "travel" | "date" | "anniversary" | "milestone" | "everyday";

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  createdAt: string;
}

export interface Couple {
  id: string;
  user1: User;
  user2: User;
  startDate: string;
  theme: Theme;
  plan: Plan;
  createdAt: string;
}

export interface CalendarEvent {
  id: string;
  coupleId: string;
  creatorId: string;
  creator?: User;
  title: string;
  description: string | null;
  startAt: string;
  endAt: string;
  type: EventType;
  color: string;
  visibility: EventVisibility;
}

export interface Memory {
  id: string;
  coupleId: string;
  creatorId: string;
  creator?: User;
  title: string;
  description: string | null;
  photoUrl: string | null;
  date: string;
  tags: MemoryTag[];
}

export interface Capsule {
  id: string;
  coupleId: string;
  creatorId: string;
  creator?: User;
  message: string;
  revealAt: string;
  revealedAt: string | null;
}

export interface Message {
  id: string;
  coupleId: string;
  senderId: string;
  sender?: User;
  eventId: string | null;
  content: string;
  createdAt: string;
  reactions: MessageReaction[];
}

export interface MessageReaction {
  id: string;
  messageId: string;
  userId: string;
  emoji: string;
}
