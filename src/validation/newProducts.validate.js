import Joi from "joi";

const createnewProductsScheme = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        'string.min': 'Mahsulot nomi kamida 3 ta belgidan iborat bo‘lishi kerak',
        'string.max': 'Mahsulot nomi maksimal 40 ta belgidan iborat bo‘lishi kerak',
        'string.empty': 'Mahsulot nomi bo‘sh bo‘lmasligi kerak',
        'any.required': 'Mahsulot nomini kiritish majburiy'
    }),

    email: Joi.string().email().trim().min(3).max(50).required().messages({
        'string.email': 'Email noto‘g‘ri formatda kiritilgan',
        'string.min': 'Email kamida 3 ta belgidan iborat bo‘lishi kerak',
        'string.max': 'Email maksimal 50 ta belgidan iborat bo‘lishi kerak',
        'string.empty': 'Email bo‘sh bo‘lmasligi kerak',
        'any.required': 'Email kiritish majburiy'
    })
});

const updatenewProductsScheme = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        'string.min': 'Mahsulot nomi kamida 3 ta belgidan iborat bo‘lishi kerak',
        'string.max': 'Mahsulot nomi maksimal 40 ta belgidan iborat bo‘lishi kerak',
        'string.empty': 'Mahsulot nomi bo‘sh bo‘lmasligi kerak',
        'any.required': 'Mahsulot nomini kiritish majburiy'
    }),

    email: Joi.string().email().trim().min(3).max(50).required().messages({
        'string.email': 'Email noto‘g‘ri formatda kiritilgan',
        'string.min': 'Email kamida 3 ta belgidan iborat bo‘lishi kerak',
        'string.max': 'Email maksimal 50 ta belgidan iborat bo‘lishi kerak',
        'string.empty': 'Email bo‘sh bo‘lmasligi kerak',
        'any.required': 'Email kiritish majburiy'
    })
});

export {
    createnewProductsScheme,
    updatenewProductsScheme
};