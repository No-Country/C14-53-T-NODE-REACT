import { z } from "zod"

const trimTransform = (value: string) => value.trim();

export const CreatePetSchema = z.object({
    body: z.object({
        // // name: z.string().trim().toUpperCase().min(4, "Too short name").max(20, "Too long name"),
        // name: z.string().refine((val)=> val.trim()),
        name: z.string().nonempty("Name is required").min(3, "Too short name").max(15, "Too long name").refine(trimTransform),
        surname: z.string().trim().nonempty("Name is required").min(3, "Too short surname").max(15, "Too long surname").toUpperCase(),
        birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        image: z.string().optional(),
        breed: z.string().toUpperCase().optional() 
    }),
})

export const FindPetSchema = z.object({
    params: z.object({
        id: z.string().uuid()
    }),
    body: z.object({
        name: z.string().trim().min(3, "Too short name").max(15, "Too long name").toUpperCase().optional(),
        surname: z.string().trim().min(4, "Too short surname").max(15, "Too long surname").toUpperCase().optional(),
        birthdate: z.string().optional(),
        image: z.string().optional(),
        breed: z.string().toUpperCase().optional() 
    }),
})

export const PetSchema = z.object({
        id: z.string().uuid(),
        name: z.string().trim().nonempty("Name is required").min(3, "Too short name").max(15, "Too long name").toUpperCase(),
        surname: z.string().trim().nonempty("Name is required").min(3, "Too short surname").max(15, "Too long surname").toUpperCase(),
        birthdate: z.string(),
        image: z.string().optional(),
        breed: z.string().toUpperCase().optional() 
}) 

export type CreatePetType = z.infer<typeof CreatePetSchema>["body"]
export type FindPetType = z.infer<typeof FindPetSchema>["params"]
export type PetSchemaType = z.infer<typeof PetSchema>
export type PutPetType = z.infer<typeof FindPetSchema>["body"]





