import Joi from "joi";

const createTrendProductsSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Trend mahsulot nomi matn bo'lishi shart",
        "string.min": "Trend mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Trend mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Trend mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Trend mahsulot nomini kiritish shart",
    }),
});
const updateTrendProductsSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Trend mahsulot nomi matn bo'lishi shart",
        "string.min": "Trend mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Trend mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Trend mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Trend mahsulot nomini kiritish shart",
    }),
});

export { createTrendProductsSchema, updateTrendProductsSchema };