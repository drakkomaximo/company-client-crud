import {v2 as cloudinary} from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_NAME } from '../config.js'

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
})

export const uploadImage = async (filePath) =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'productImages'
    })
}

export const deleteImage = async (publicId) =>{
    return await cloudinary.uploader.destroy(publicId)
}