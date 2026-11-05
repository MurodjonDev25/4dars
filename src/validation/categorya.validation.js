import Joi from "joi";

const createCategoryaSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Kategoriya nomi matn bo'lishi shart",
        "string.min": "Kategoriya nomi kamida 3 ta harf bo'lsin",
        "string.max": "Kategoriya nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Kategoriya nomi bo'sh bo'lmasligi shart",
        "any.required": "Kategoriya nomini kiritish shart",
    }),
});
const updateCategoryaSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Kategoriya nomi matn bo'lishi shart",
        "string.min": "Kategoriya nomi kamida 3 ta harf bo'lsin",
        "string.max": "Kategoriya nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Kategoriya nomi bo'sh bo'lmasligi shart",
        "any.required": "Kategoriya nomini kiritish shart",
    }),
});

export { createCategoryaSchema, updateCategoryaSchema };
