import {body} from 'express-validator';

export const registerValidationRules = () =>[
    body('nombreSuperHeroe')
        .notEmpty().withMessage('El nombre de superheroe es requerido')
        .trim()
        .escape()
        .isLength({min:3, max: 60}).withMessage('La longitud del nombre de superheroe debe estar entre 3 y 60 caracteres'),
    body('nombreReal')
        .notEmpty().withMessage('El nombre real es requerido')
        .trim()
        .escape()
        .isLength({min:3, max: 60}).withMessage('La longitud del nombre real debe estar entre 3 y 60 caracteres'),
    body('edad')
        .exists().withMessage('La edad es requerida')
        .isInt({min:0}).withMessage('La edad debe ser un entero no negativo')
        .trim(),
    body('poderes')
        .exists({checkFalsy: true}).withMessage('El listado de poderes debe existir')
        .custom(value => {
            const array = value.split('-').map(p => p.trim()).filter(p => p!='');
            return array.length >= 1;
        }).withMessage('Debe existir al menos un poder'),
    body('poderes.*')
        .notEmpty().withMessage('El nombre de poder es requerido')
        .isString().withMessage('Los poderes deben describirse en String')
        .isLength({min:3,max:60}).withMessage('El nombre de poder debe tener caracteres en un rango de 3 a 60')
        .trim()
        .escape()
];