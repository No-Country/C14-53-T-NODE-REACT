// import { Request, Response } from "express";
// import { Supplier } from "../models/Supplier.model";


// export const createSupplier = async(req: Request, res: Response) => {
//     try {
//         console.log(req.body)
//         const  { name, surname, address, number } = req.body
//         const saveSupplier= await Supplier.create({
//             name,
//             surname, 
//             address,
//             number
//         })
//         console.log(saveSupplier)
//         return res.status(200).json({ message: 'created pet', data: saveSupplier });
//     } catch (error) {
//         return res.status(500).json({message:'unexpected error'})
//     }
// }

import { Request, Response } from "express";
import { Supplier } from "../models/Supplier.model";
import { TypeSupplier } from "../models/typeSupplier.model"; 

export const createSupplier = async (req: Request, res: Response) => {
  try {
    const { name, surname, address, number, typeSupplierId } = req.body; 
    
    const savedSupplier = await Supplier.create({
      name,
      surname,
      address,
      number,
    });

    const typeSupplier = await TypeSupplier.findByPk(typeSupplierId); 
    
    // if (typeSupplier) {
    //   await savedSupplier.setTypeSupplier(typeSupplier);
    // } else {
    //   return res.status(400).json({ message: "TypeSupplier not found" });
    // }

    return res.status(200).json({ message: "created Supplier", data: savedSupplier });
  } catch (error) {
    return res.status(500).json({ message: "unexpected error" });
  }
};
