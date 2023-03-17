"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = void 0;
const card_1 = __importDefault(require("../models/card"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield card_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
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
//# sourceMappingURL=usuarios.js.map