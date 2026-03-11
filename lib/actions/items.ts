"use server";

import { prisma } from "@/lib/prisma";
import { CreateItemSchema, CreateItemInput } from "@/lib/validations";
import { ItemStatus } from "@prisma/client";

export async function getItems(query?: { game?: string; minPrice?: number; maxPrice?: number; search?: string }) {
  try {
    const items = await prisma.item.findMany({
      where: {
        status: ItemStatus.LISTED,
        ...(query?.game && { game: query.game }),
        ...(query?.minPrice !== undefined && { price: { gte: query.minPrice } }),
        ...(query?.maxPrice !== undefined && { price: { lte: query.maxPrice } }),
        ...(query?.search && {
          OR: [
            { name: { contains: query.search, mode: "insensitive" } },
            { description: { contains: query.search, mode: "insensitive" } },
          ],
        }),
      },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: items };
  } catch (error) {
    console.error("Error fetching items:", error);
    return { success: false, error: "Failed to fetch items" };
  }
}

export async function createItem(userId: string, input: CreateItemInput) {
  try {
    const validatedData = CreateItemSchema.parse(input);
    
    const newItem = await prisma.item.create({
      data: {
        ...validatedData,
        seller_id: userId,
        status: ItemStatus.LISTED,
      },
    });
    
    return { success: true, data: newItem };
  } catch (error) {
    console.error("Error creating item:", error);
    return { success: false, error: "Failed to create item" };
  }
}

export async function getItemById(id: string) {
  try {
    const item = await prisma.item.findUnique({
      where: { id },
      include: { seller: true },
    });
    return { success: true, data: item };
  } catch (error) {
    console.error("Error fetching item by id:", error);
    return { success: false, error: "Failed to fetch item" };
  }
}
