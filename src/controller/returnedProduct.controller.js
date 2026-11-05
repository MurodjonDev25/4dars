import { getData, setData } from "../helpers/fileData.js";
class returnedProductsControllers {
    async getAll(req, res) {
        try {
            const users = await getData('returnedProducts.json')
            if (!users) {
              return  res.status(404).json({
                    succes: false,
                    message: 'Malumot yuq!'
                })
            }
          return  res.status(200).json({
                succes: true,
                message: `Malumot topildi!`,
                data: users
            })
        } catch (err) {
            console.log(`Error is on getData function error ${err.message}`);

        }
    }
    async getId(req, res) {
        const id = +req.params.id
        const users = await getData('returnedProducts.json')
        const index = users.find(el => el.id === id)

        if (!index) {
            res.status(404).json({
                succes: false,
                message: 'Malumot topilmadi'
            })
        }
        return res.status(200).json({
            succes: true,
            message: 'Malumot topildi',
            data: index

        })
    }
    async creat(req, res) {
        const users = await getData('returnedProducts.json')

        const newUser = {
            id: users.length ? users.at(-1).id + 1 : 1,
            ...req.body
        }
        users.push(newUser)
        await setData('returnedProducts.json',users)
        return res.status(201).json({
            succes: true,
            message: `Yangi malumot qushildi`,
            data: newUser
        })
    }
    async update(req, res) {
        const id = +req.params.id
        const users = await getData('returnedProducts.json')
        const index = users.findIndex(el => el.id === id)

        if (index != -1) {
            users[index] = {
                id: id,
                ...req.body
            }
            await setData('returnedProducts.json',users)
            return res.status(200).json({})
        }
       return res.status(404).json({
            succes: false,
            message: `Bunday ${id}li user yuq`
        })
    }
    async deleteUser(req, res) {
        const id = +req.params.id
        const users = await getData('returnedProducts.json')
        const index = users.findIndex(el => el.id === id)

        users.splice(index,1)
        await setData('returnedProducts.json',users)
     return   res.status(200).json({
            succes:true,
            message:'Muvaffaqiyatli uchirildi'
        })
    }

    async create(req, res) {
        return this.creat(req, res);
    }

    async deleteItem(req, res) {
        return this.deleteUser(req, res);
    }
}

export default new returnedProductsControllers()