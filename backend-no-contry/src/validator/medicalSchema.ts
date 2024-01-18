// import { parseArgs } from 'util';
import { object, z } from 'zod'

export const CreateMedicalSchema = z.object({
    body: z.object({
        date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/).min(10).max(10).refine((value: string) => isValidDate(value), {
            message: "Fecha no válida (formato DD-MM-YYYY)"
        }),
        treatment: z.string().min(2, "Too short treatment").max(100, "Too long treatment"),
        type: z.string().min(2, "Too short type").max(50, "Too long type"),
        note: z.string().max(500, "Too long note").optional(),
        petMedicalId: z.string().uuid(),

    })
});

const isValidDate = (dateString: string): boolean => {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(dateString)) return false;

    const parts = dateString.split("-");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    if (month < 1 || month > 12 || day < 1 || day > 31) return false;

    return true;
}


export const FindMedicalSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
    body: z.object({
        date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/).min(10).max(10).refine((value: string) => isValidDate(value), {
            message: "Fecha no válida (formato DD-MM-YYYY)"
        }).optional(),
        treatment: z.string().min(2, "Too short treatment").max(100, "Too long treatment"),
        type: z.string().min(2, "Too short type").max(50, "Too long type"),
        note: z.string().max(500, "Too long note"),
        petMedicalId: z.string().uuid(),
        
    }),

})

export const ParamsMedicalSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
})

export const MedicalSchema = z.object({
    id: z.string(),
    date: z.string(),
    treatment: z.string(),
    type: z.string(),
    note: z.string().optional(),
    petMedicalId: z.string().uuid(),  
   
})



export type CreateMedicalType = z.infer<typeof CreateMedicalSchema>['body']
export type FindMedicalType = z.infer<typeof FindMedicalSchema>['params']
export type MedicalSchemaType = z.infer<typeof MedicalSchema>
export type PutPetType = z.infer<typeof FindMedicalSchema>['body']
