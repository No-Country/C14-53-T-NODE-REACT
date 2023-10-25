import { z } from "zod"

export const CreateSupplierSchema = z.object({
    body: z.object({
        name: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long name"),
        surname: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long surname"),
        address: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long address"),
        number: z.number().int().max(6, "Too long number"),
    }),
})

export const FindSupplierSchema = z.object({
    params: z.object({
        id: z.string().uuid(),

    }),
    body: z.object({
        name: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long name").optional(),
        surname: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long surname").optional(),
        address: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long address").optional(),
        number: z.number().int().max(6, "Too long number").optional(),
    }),
})

export const TypeSupplierSchema = z.object({
        id: z.string().uuid(),
        name: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long name"),
        surname: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long surname"),
        address: z.string().nonempty("Name is required").min(3,"name too short").max(15, "Too long address"),
        number: z.number().int().max(6, "Too long number"),   
}) 

export type CreateSupplierType = z.infer<typeof CreateSupplierSchema>["body"]
export type SupplierSchemaType = z.infer<typeof TypeSupplierSchema>
export type FindSupplierSchemaType = z.infer<typeof FindSupplierSchema>["params"]
export type putSupplierSchemaType = z.infer<typeof FindSupplierSchema>["body"]