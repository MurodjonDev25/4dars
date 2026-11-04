import Joi from "joi";

const createDiscountSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Mahsulot nomi matn bo'lishi shart",
        "string.min": "Mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Mahsulot nomini kiritish shart",
    }),
    narx: Joi.number().positive().required().messages({
        "number.base": "Narx son bo'lishi shart",
        "number.positive": "Narx 0 dan katta bo'lishi shart",
        "any.required": "Narxni kiritish shart",
    }),
    foyiz: Joi.number().min(1).max(40).required().messages({
        "number.base": "Chegirma foizi son bo'lishi shart",
        "number.min": "Chegirma foizi kamida 1 bo'lsin",
        "number.max": "Chegirma foizi maksimal 40 bo'lsin",
        "any.required": "Chegirma foizini kiritish shart",
    }),
});
const updateDiscountSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Mahsulot nomi matn bo'lishi shart",
        "string.min": "Mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Mahsulot nomini kiritish shart",
    }),
    narx: Joi.number().positive().required().messages({
        "number.base": "Narx son bo'lishi shart",
        "number.positive": "Narx 0 dan katta bo'lishi shart",
        "any.required": "Narxni kiritish shart",
    }),
    foyiz: Joi.number().min(1).max(40).required().messages({
        "number.base": "Chegirma foizi son bo'lishi shart",
        "number.min": "Chegirma foizi kamida 1 bo'lsin",
        "number.max": "Chegirma foizi maksimal 40 bo'lsin",
        "any.required": "Chegirma foizini kiritish shart",
    }),
});

export { createDiscountSchema, updateDiscountSchema };
