import z from "zod";

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z.string().min(1, {
		message: "Password is required",
	}),
});

export const RegisterSchema = z.object({
	email: z.string().email({
		message: "Email is required.",
	}),
	password: z.string().min(6, {
		message: "Minimum of 6 characters are required.",
	}),
	userName: z.string().min(1, {
		message: "Username is required",
	}),
});

export const ResetSchema = z.object({
	email: z.string().email({
		message: "Email is required.",
	}),
});