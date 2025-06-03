"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addTodo(_: any, formData: FormData) {
	const text = formData.get("todo") as string;

	if (text.trim()) {
		await prisma.todos.create({ data: { text } });
		revalidatePath("/");
		return { message: "Todo added successfully", input: "" };
	}

	return { message: "Todo cannot be empty", input: text };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteTodo(_: any, formData: FormData) {
	const id = formData.get("id") as string;
	await prisma.todos.delete({ where: { id } });

	revalidatePath("/");
	return { message: "Todo deleted successfully" };
}
