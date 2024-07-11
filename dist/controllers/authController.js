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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const data_source_1 = require("../data-source");
const Administrateurs_1 = require("./../entity/Administrateurs");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom_utilisateur, email, mot_de_passe } = req.body;
    const userRepository = data_source_1.AppDataSource.getRepository(Administrateurs_1.Administrateurs);
    const utilisateur = userRepository.create({
        nom_utilisateur,
        email,
        mot_de_passe
    });
    try {
        yield userRepository.save(utilisateur);
        res.status(201).send('Utilisateur enregistré avec succès');
    }
    catch (error) {
        console.error('Erreur lors de l\'enregistrement:', error);
        res.status(500).send('Erreur lors de l\'enregistrement');
    }
});
exports.register = register;
