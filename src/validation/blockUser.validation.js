import Joi from "joi";

const createBlockUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Foydalanuvchi nomi matn bo'lishi shart",
        "string.min": "Foydalanuvchi nomi kamida 3 ta harf bo'lsin",
        "string.max": "Foydalanuvchi nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Foydalanuvchi nomi bo'sh bo'lmasligi shart",
        "any.required": "Foydalanuvchi nomini kiritish shart",
    }),
});
const updateBlockUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Foydalanuvchi nomi matn bo'lishi shart",
        "string.min": "Foydalanuvchi nomi kamida 3 ta harf bo'lsin",
        "string.max": "Foydalanuvchi nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Foydalanuvchi nomi bo'sh bo'lmasligi shart",
        "any.required": "Foydalanuvchi nomini kiritish shart",
    }),
});

export { createBlockUserSchema, updateBlockUserSchema };
