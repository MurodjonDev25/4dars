import Joi from "joi";

const createNewProductsSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Yangi mahsulot nomi matn bo'lishi shart",
        "string.min": "Yangi mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Yangi mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Yangi mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Yangi mahsulot nomini kiritish shart",
    }),
});
const updateNewProductsSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Yangi mahsulot nomi matn bo'lishi shart",
        "string.min": "Yangi mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Yangi mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Yangi mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Yangi mahsulot nomini kiritish shart",
    }),
});

export { createNewProductsSchema, updateNewProductsSchema };
