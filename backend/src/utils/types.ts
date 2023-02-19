import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";
import { PubSub } from "graphql-subscriptions";
import { Context } from "graphql-ws/lib/server";
/**
 * Sever Configuration
 */
export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
  pubsub: PubSub;
}

export interface Session {
  user?: User;
  expires: ISODateString;
}

export interface SubscriptionContext extends Context {
  connectionParams: {
    session?: Session;
  };
}

export interface User {
  id: string;
  username: string;
  image: string;
  name: string;
  email: string;
  emailVerified: boolean;
}
export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}
