import {config, uploader} from 'cloudinary'

config({
    cloud_name: 'dhq8lmviv',
    api_key: '712237564113481',
    api_secret: 'MRW16dPOpu-EH1kWDpLGJGrM7Z8'
  });

  export const uploadProductImage = async (filepath) => {
    
    return await uploader.upload(filepath, {
        folder: 'products',
    })


  }

  export const uploadUserImage = async (filepath) => {

    return await uploader.upload(filepath, {
      folder: 'users',
  })

  }