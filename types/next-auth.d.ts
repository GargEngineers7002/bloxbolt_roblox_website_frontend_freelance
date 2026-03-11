import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      balance: number;
      premium: boolean;
      createdAt: Date;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    balance: number;
    premium: boolean;
    createdAt: Date;
  }
}
