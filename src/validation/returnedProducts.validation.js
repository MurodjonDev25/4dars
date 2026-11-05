import Joi from "joi";

const createReturnedProductsSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Qaytarilgan mahsulot nomi matn bo'lishi shart",
        "string.min": "Qaytarilgan mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Qaytarilgan mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Qaytarilgan mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Qaytarilgan mahsulot nomini kiritish shart",
    }),
});
const updateReturnedProductsSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Qaytarilgan mahsulot nomi matn bo'lishi shart",
        "string.min": "Qaytarilgan mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Qaytarilgan mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Qaytarilgan mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Qaytarilgan mahsulot nomini kiritish shart",
    }),
});

export { createReturnedProductsSchema, updateReturnedProductsSchema };
