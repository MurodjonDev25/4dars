import { getData, setData } from "../helpers/fileData.js";

class Basketcontroller{

async getAll(req, res){
    try{
    const items = await getData('basket.json')
    if(!items.length){
    return res.status(404).json({
        success:false,
        message:"malumotla topilmadi"
})
}
        return res.status(200).json({
            success:true,
            data:items
})
}catch(err){
        console.log(`getda error: ${err.message}`)
        return res.status(500).json({success:false,message:"serverda xatoli bor"})
        }
    }

async getId(req,res){
    try{
        const items=await getData('basket.json')
        const id=+req.params.id
        const item=items.find((el)=>el.id===id)
    if(!item){
        return res.status(404).json({
            success:false,
            message:'mahsulot topilmadi'
    })
}
        return res.status(200).json({
            success:true,
            message:"topildi",
            data:item
            })
    }catch(err){
        console.log(`getId da xatolik bor: ${err.message}`)
        return res.status(500).json({success:false, message:"serverda error"})
    }
}

async create(req,res){
    try{
    const items=await getData('basket.json')
    const newItem={
    ...req.body,
    id:items.length ? items.at(-1).id + 1 : 1,
}
    items.push(newItem)
    await setData('basket.json', items)
    return res.status(201).json({
        success:true,
        message:"muvaffaqiyatli qo'shildi",
        data:newItem
})
}catch(err){
console.log(`createda error : ${err.message}`)
return res.status(500).json({success:false, 
message:"Serverda errorr"})
    }
}

async update(req,res){
    try{
        const id=+req.params.id
        const items=await getData('basket.json')
        const index=items.findIndex(el=>el.id===id)

        if(index===-1){
            return res.status(404).json({success:false,message:"mahsulot topilmadi"})
}
    items[index]={
    ...req.body,
    id:id,
}
        await setData('basket.json',items)
        return res.status(200).json({
            success:true,
            message:"ozgartirildi",
            data:items[index]
        })
    }catch(err){
        console.log(`updateda xatolik bor: ${err.message}`)
        return res.status(500).json({success:false, message:"Serverda xatoli"})
        }
    }

async deleteItem(req,res){
    try{
    const id = +req.params.id
    const items = await getData('basket.json')
    const index = items.findIndex(el=>el.id===id)

    if(index===-1){
        return res.status(404).json({success:false, message:"mahsulot topilmadi"})
}
    items.splice(index,1)
    await setData('basket.json',items)
    return res.status(201).json({
    success:true,
    message:"ochirildi"
})
}catch(err){
    console.log(`deleteda error: ${err.message}`)
    return res.status(500).json({success:false,
    message:"Serverda xatoli"})
        }
    }
}

export default new Basketcontroller()