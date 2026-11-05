import Joi from "joi";

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Foydalanuvchi ismi matn bo'lishi shart",
        "string.min": "Foydalanuvchi ismi kamida 3 ta harf bo'lsin",
        "string.max": "Foydalanuvchi ismi maksimal 40 ta harf bo'lsin",
        "string.empty": "Foydalanuvchi ismi bo'sh bo'lmasligi shart",
        "any.required": "Foydalanuvchi ismini kiritish shart",
    }),
    email: Joi.string().email().trim().min(3).max(50).required().messages({
        "string.base": "Foydalanuvchi emaili matn bo'lishi shart",
        "string.email": "Foydalanuvchi emaili noto'g'ri formatda",
        "string.min": "Foydalanuvchi emaili kamida 3 ta belgi bo'lsin",
        "string.max": "Foydalanuvchi emaili maksimal 50 ta belgi bo'lsin",
        "string.empty": "Foydalanuvchi emaili bo'sh bo'lmasligi shart",
        "any.required": "Foydalanuvchi emailini kiritish shart",
    }),
});
const updateUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Foydalanuvchi ismi matn bo'lishi shart",
        "string.min": "Foydalanuvchi ismi kamida 3 ta harf bo'lsin",
        "string.max": "Foydalanuvchi ismi maksimal 40 ta harf bo'lsin",
        "string.empty": "Foydalanuvchi ismi bo'sh bo'lmasligi shart",
        "any.required": "Foydalanuvchi ismini kiritish shart",
    }),
    email: Joi.string().email().trim().min(3).max(50).required().messages({
        "string.base": "Foydalanuvchi emaili matn bo'lishi shart",
        "string.email": "Foydalanuvchi emaili noto'g'ri formatda",
        "string.min": "Foydalanuvchi emaili kamida 3 ta belgi bo'lsin",
        "string.max": "Foydalanuvchi emaili maksimal 50 ta belgi bo'lsin",
        "string.empty": "Foydalanuvchi emaili bo'sh bo'lmasligi shart",
        "any.required": "Foydalanuvchi emailini kiritish shart",
    }),
});

export { createUserSchema, updateUserSchema };
