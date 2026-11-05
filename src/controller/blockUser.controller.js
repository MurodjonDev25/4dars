import { getData,setData } from "../helpers/fileData.js"


class blockUserController{
    async getAll(req,res){
        try{
            const users = await getData('blockUser.json')
            if(!users.length){
                return res.status(404).json({
                    success:false,
                    message:"malumotlar topilmadi"
                })
            }
            return res.status(200).json({
                success:true,
                data:users
            })
        }catch(err){
            console.log(`get da xatolik bor: ${err.message}`)
            return res.status(500).json({success:false,message:"Serverda xatolik"})
        }
    }
    async getId(req,res){
        try{
            const users = await getData('blockUser.json')
            const id = +req.params.id
            const user = users.find((el) => el.id === id)

            if(!user){
                return res.status(404).json({
                    success:false,
                    message:'user topilmadi'
                })
            }

            return res.status(200).json({
                success:true,
                message:"topildi",
                data:user
            })
        }catch(err){
            console.log(`getId da xatolik bor: ${err.message}`)
            return res.status(500).json({success:false,message:"Serverda xatolik"})
        }
    }
    async create(req,res){
        try{
            const users = await getData('blockUser.json')
            const newUser = {
                ...req.body,
                id:users.length ? users.at(-1).id+1: 1
            }
            users.push(newUser)
            await setData('blockUser.json',users)
            return res.status(201).json({
                success:true,
                message:"muvaffaqiyatli qo'shildi",
                user:newUser
            })
        }catch(err){
            console.log(`Create da xatolik bor : ${err.message}`)
            return res.status(500).json({success:false,message:"Serverda xatolik"})
        }
    }
    async update(req,res){
        try{
            const id = +req.params.id
            const users = await getData('blockUser.json')
            const index = users.findIndex(el=>el.id===id)

            if(index===-1){
                return res.status(404).json({success:false,message:"user topilmadi"})
            }
            users[index]={
                ...req.body,
                id:id
            }
            await setData('blockUser.json',users)
            return res.status(200).json({
                success:true,
                message:"o'zgartirildi",
                data:users[index]
            })
        }catch(err){
            console.log(`updateda xatolik bor: ${err.message}`)
            return res.status(500).json({success:false,message:"Serverda xatolik"})
        }
    }
    async deleteItem(req,res){
        try{
            const id = +req.params.id
            const users = await getData('blockUser.json')
            const index = users.findIndex(el=>el.id===id)

            if(index===-1){
                return res.status(404).json({success:false,message:"user topilmadi"})
            }
            users.splice(index,1)
            await setData('blockUser.json',users)
            return res.status(200).json({
                success:true,
                message:"o'chirildi"
            })
        }catch(err){
            console.log(`deleteda xatolik bor: ${err.message}`)
            return res.status(500).json({success:false,message:"Serverda xatolik"})
        }
    }

}


export default new blockUserController()
