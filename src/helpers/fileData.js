import fs from 'fs/promises'
import path from "path"


const getFilePath=(fileName) =>
    path.join(process.cwd(), `src/data/${fileName}`)

export async function getData(fileName){
    try{
        const filePath=getFilePath(fileName)
        const data=await fs.readFile(filePath, "utf-8")
        return JSON.parse(data)
    }catch(error){
        return []
    }
}

export async function setData(fileName, data ){
    const filePath=getFilePath(fileName)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}