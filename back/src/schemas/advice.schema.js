import { z } from 'zod';

export const createAdviceSchema = z.object({
    clientName: z.string({
        required_error: 'name Is Required'
    }),

    description: z.string({
        required_error: 'Description Is Required'
    }),

    date: z.string().datetime().optional()
})