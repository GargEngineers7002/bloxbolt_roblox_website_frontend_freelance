import { z } from "zod";
import { UserRole, ItemStatus } from "@prisma/client";

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  image: z.string().nullable(),
  role: z.nativeEnum(UserRole),
  balance: z.number().min(0),
  premium: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ItemSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().nullable().optional(),
  image: z.string().url().nullable().optional(),
  game: z.string().min(1, "Game is required"),
  category: z.string().nullable().optional(),
  robux_price: z.number().int().min(1, "Robux price must be positive"),
  price: z.number().min(0.01, "Price must be at least 0.01"),
  status: z.nativeEnum(ItemStatus),
  isNew: z.boolean().default(true),
  seller_id: z.string().cuid(),
  buyer_id: z.string().cuid().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateItemSchema = ItemSchema.pick({
  name: true,
  description: true,
  image: true,
  game: true,
  category: true,
  robux_price: true,
  price: true,
}).extend({
  // Add any additional fields or overrides for creation
});

export type CreateItemInput = z.infer<typeof CreateItemSchema>;
export type Item = z.infer<typeof ItemSchema>;
export type User = z.infer<typeof UserSchema>;
