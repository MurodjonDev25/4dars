import Joi from "joi";

const createUserScheme=Joi.object({
    name:Joi.string().min(3).max(40).required().messages({
        'string.min': 'foydalanuvchi kamida 3 ta harf kiritsin',
        'string.max' : 'foydalanuchi maksimal 40ta harf kiritsin',
        'string.empty' : 'foydalanuchi malumot bosh bomasligi shart',
        'any.required' : 'foydalanuchi malumot kiritishi shart'
    }),
    email:Joi.string().email().trim().min(3).max(50).required().messages({
         'string.email': "email noto'g'ri formatda",
        'string.min': 'foydalanuvchi email kamida 3 ta harf kiritsin',
        'string.max' : 'foydalanuchi email  maksimal 40ta harf kiritsin',
        'string.empty' : 'foydalanuchi email bosh bomasligi shart',
        'any.required' : 'foydalanuchi email kiritishi shart'
    })
})

const updateUserScheme=Joi.object({
    name:Joi.string().min(3).max(40).required().messages({
      'string.min':'Foydalanuvchi ismi kamida 3 ta harf kiritsin',
      'string.max':'Foydalanuvchi ismi maksimal 40 ta harf kiritsin',
      'string.empty':'Foydalanuvchi ismi  bosh bolmasligi shart',
      'any.required':'Fordalanuvchi ismi kirtishi shart'
    }),
    email:Joi.string().email().trim().min(3).max(50).required().messages({
       'string.email':'Foydalanuvchi email kiritishi shart',
       'string.min':'Foydalanuvchi email kamida 3 ta harf kiritsin',
       'string.max':'Foydalanuvchi email maksimal 40 ta harf kiritsin',
       'string.empty':'Foydalanuvchi email  bosh bolmasligi shart',
       'any.required':'Fordalanuvchi email  kirtishi shart'
    })
})



export {
    createUserScheme,
    updateUserScheme
}