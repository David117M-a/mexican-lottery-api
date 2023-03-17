import { Request, Response } from "express";
import { ITable } from "../interfaces/ITable";
import Card from "../models/card";
import Table from '../models/table';

export const getCards = async (req: Request, res: Response) => {
    try {
        const cards = await Card.findAll();
        res.json({ cards });
    } catch (error) {
        res.status(500).json({ message: "Server error, try later" });
    }
}

export const getTables = async (req: Request, res: Response) => {
    try {
        const tables = await Table.findAll();
        res.json({ tables });
    } catch (error) {
        res.status(500).json({ message: "Server error, try later" });
    }
}

export const generateRandomTables = async (req: Request, res: Response) => {
    const { length } = req.params;
    try {
        const cards = await Card.findAll();
        const tables = [];
        for (let c = 0; c < parseInt(length); c++) {
            const cardsForNewTable: string[] = [];
            for (let t = 0; t < 16; t++) {
                const randomCard = cards[Math.floor(Math.random() * (54 - 0) + 0)].dataValues.name;
                if (cardsForNewTable.includes(randomCard)) {
                    t--;
                    continue;
                }

                cardsForNewTable.push(randomCard);
            }

            if (isTableCloned(tables, cardsForNewTable)) {
                c--;
                continue;
            }

            tables.push({
                card1: cardsForNewTable[0],
                card2: cardsForNewTable[1],
                card3: cardsForNewTable[2],
                card4: cardsForNewTable[3],
                card5: cardsForNewTable[4],
                card6: cardsForNewTable[5],
                card7: cardsForNewTable[6],
                card8: cardsForNewTable[7],
                card9: cardsForNewTable[8],
                card10: cardsForNewTable[9],
                card11: cardsForNewTable[10],
                card12: cardsForNewTable[11],
                card13: cardsForNewTable[12],
                card14: cardsForNewTable[13],
                card15: cardsForNewTable[14],
                card16: cardsForNewTable[15],
            });
        };

        tables.forEach((t: ITable) => {
            const newTable = new Table(t);
            console.log(newTable);
            newTable.save();
        });

        return res.status(201).json({ tables });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error, try later" });
    }
}

const isTableCloned = (tables: ITable[], newTable: string[]): boolean => {
    for (const table of tables) {
        let coincidences = 0;
        for (const prop in table) {
            if (newTable.includes(table[prop as keyof typeof table]! as string)) coincidences++;
        }

        if (coincidences == 16) {
            return true;
        }
    }

    return false;
}

// export const getUsuario = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const usuario = await Usuario.findByPk(id);
//     if (usuario) {
//         res.json({ usuario });
//     } else {
//         res.status(404).json(`No existe un usuario con el id ${id}`);
//     }

// }

// export const postUsuario = async (req: Request, res: Response) => {
//     const { body } = req;

//     try {
//         const existeEmail = await Usuario.findOne({
//             where: {
//                 email: body.email
//             }
//         });
//         if (existeEmail) {
//             return res.status(400).json({
//                 msg: `Ya existe un usuario con el correo ${body.email}`
//             });
//         }

//         const usuario = new Usuario(body);
//         await usuario.save();

//         res.json({ usuario });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Hable con el administrador'
//         });
//     }
// }

// export const putUsuario = async (req: Request, res: Response) => {
//     const { body } = req;
//     const { id } = req.params;

//     try {
//         const usuario = await Usuario.findByPk(id);
//         if (!usuario) {
//             return res.status(404).json({
//                 msg: `No existe un usuario con el id ${id}`
//             });
//         }

//         const existeEmail = await Usuario.findOne({
//             where: {
//                 email: body.email
//             }
//         });
//         if (existeEmail) {
//             return res.status(400).json({
//                 msg: `El correo ${body.email} ya está asignado a otro usuario`
//             });
//         }

//         await usuario.update(body);

//         res.json({ usuario });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Hable con el administrador'
//         });
//     }
// }

// export const deleteUsuario = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const usuario: any = await Usuario.findByPk(id);
//     if (!usuario) {
//         return res.status(404).json({
//             msg: `No existe un usuario con el id ${id}`
//         });
//     }

//     if (!req.query.destroy) {
//         return await desactivateUsuario(usuario, res);
//     }

//     await usuario.destroy();

//     res.json({
//         msg: `Usuario "${usuario.nombre}" eliminado`,
//     });
// }

// export const desactivateUsuario = async (usuario: any, res: Response) => {
//     await usuario.update({ estado: false });
//     return res.json({
//         msg: `Usuario ${usuario.nombre} desactivado`
//     });
// }
