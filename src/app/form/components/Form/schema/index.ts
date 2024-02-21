import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(8),
  checkbox: z.literal(true),
  message: z.string().min(1),
});

export default formSchema;

export type FormSchema = z.infer<typeof formSchema>;
