import { z } from "zod"

export const CreatePetSchema = z.object({
  body: z.object({
    userId: z.string().uuid(),
    name: z.string().nonempty("Name is required").min(3, "Too short name").max(15, "Too long name"),
    surname: z.string().nonempty("Name is required").min(3, "Too short surname").max(15, "Too long surname"),
    birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    weight: z.string().regex(/^\d+(\.\d+)?\s?kg$/),
    image: z.string().optional(),
    species: z.string().max(15, "Too long species"),
    breed: z.string().max(15, "Too long breede"),
    descriptions: z.string().max(180, "Too descriptions"),
  }),
})

export const FindPetSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  }),
  body: z.object({
    userId: z.string().uuid(),
    name: z.string().trim().min(3, "Too short name").max(15, "Too long name").optional(),
    surname: z.string().trim().min(3, "Too short surname").max(15, "Too long surname").optional(),
    birthdate: z.string().optional(),
    weight: z.string(),
    image: z.string().optional(),
    species: z.string().max(15, "Too long species").optional(),
    breed: z.string().max(15, "Too long breede").optional(),
    descriptions: z.string().max(180, "Too descriptions"),
  }),
})

export const ParamsFindPetSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  })
})

export const PetSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  name: z.string(),
  surname: z.string(),
  birthdate: z.string(),
  weight: z.string(),
  image: z.string(),
  species: z.string(),
  breed: z.string(),
  descriptions: z.string(),
})

export type CreatePetType = z.infer<typeof CreatePetSchema>["body"]
export type FindPetType = z.infer<typeof FindPetSchema>["params"]
export type PetSchemaType = z.infer<typeof PetSchema>
export type PutPetType = z.infer<typeof FindPetSchema>["body"]





