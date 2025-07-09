import { validationResult } from "express-validator";

export const handleValidationErrors = (vista) => (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.render(vista,{
            errors: errors.array(),
            hero: {...req.body, _id: req.params.id}
        });   
    }

    next();
}