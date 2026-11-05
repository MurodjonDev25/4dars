import Joi from 'joi'


const createbasketschema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base':'Mahsulotlaring nomi string bolsihi kerak bolishi kerak',
        'string.min':'Mahsulotlar nomi kamida 3ta bolishi kerak',
        'string.max':'Mahsulotlar nomi 2ota dan oshmasligi kerak',
        'string.empty':'Mahsulotning nomi bosh bolmasligi  kerak',
        'any.required': 'Mahsulatning ismini kiritish shart'
    })
});

const updatebasketschema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base':'Mahsulotlaring nomi string bolsihi kerak bolishi kerak',
        'string.min':'Mahsulotlar nomi kamida 3ta bolishi kerak',
        'string.max':'Mahsulotlar nomi 2ota dan oshmasligi kerak',
        'string.empty':'Mahsulotning nomi bosh bolmasligi  kerak',
        'any.required': 'Mahsulatning ismini kiritish shart'
    })
})

export {
    createbasketschema,
    updatebasketschema
}