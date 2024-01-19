import { z } from 'zod'

export const createMedicalSchema = z.object({
    body: z.object({
        date: z.coerce.date(),
        treatment: z.string().min(2, "Too short treatment").max(100, "Too long treatment"),
        type: z.string().min(2, "Too short type").max(50, "Too long type"),
        note: z.string().max(500, "Too long note").optional(),
        petMedicalId: z.string().uuid(),

    })
});



export const findMedicalSchema = z.object({
    body: z.object({
        id: z.string(),
        petMedicalId: z.string()

    }),
    
})

export const findAllMedicalSchema = z.object({
    params: z.object({
        id: z.string().uuid()

    })
})



