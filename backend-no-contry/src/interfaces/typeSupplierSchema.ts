import { z } from "zod"

export const CreateTypeSupplierSchema = z.object({
    body: z.object({
        typeSupplier: z.string().nonempty("Name is required").max(15, "Too long name"),
    }),
})

export const FindTypeSupplierSchema = z.object({
    params: z.object({
        id: z.coerce.number().int(),
    }),
    body: z.object({
        typeSupplier: z.string().nonempty("Name is required").max(15, "Too long name"),
    }),
})

export const TypeSupplierSchema = z.object({
        id: z.number().int(),
        typeSupplier: z.string().nonempty("Name is required").max(15, "Too long name"),   
}) 

export type CreateTypeSupplierType = z.infer<typeof CreateTypeSupplierSchema>["body"]
export type TypeSupplierSchemaType = z.infer<typeof TypeSupplierSchema>
export type FindTypeSupplierSchemaType = z.infer<typeof FindTypeSupplierSchema>["params"]
// export type putTypeSupplierSchemaType = z.infer<typeof FindTypeSupplierSchema>["body"]
