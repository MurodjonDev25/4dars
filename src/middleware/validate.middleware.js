const validate = (schema, source = 'body') => (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
        abortEarly: false,
        stripUnknown: true,
    })

    if (error) {
        return res.status(400).json({
            success: false,
            message: 'validation xatosi',
            error: error.details.map((el) => el.message),
        })
    }

    req.validatedData = value

    next()
}

export default validate