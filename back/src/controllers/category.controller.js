import Category from  '../models/category.model.js';


export const getCategorys = async(req,res)=>{
    const category = await Category.find();//mostrar todas las categorias por user:req.params.id
    res.json(category);
}


export const getCategory = async (req, res) => {
   const category = await Category.findById(req.params.id);
   if(!category) return res.status(404).json({message:"category not found"})

   res.status(200).json(category)
}

//in task is createTask
export const createCategory = async (req, res) => {
    //en hind es createcategory
   /* const{title,price,description,name,rating,stock,discountPercentaje,brand,category,images}=req.body  */
   const newCategory = new Category(req.body)
    const categorySave = await newCategory.save()//lo que no es un prduct se guarda?
    res.json(categorySave)
    /*
    res.status(200).json({
        title:categoryave.title,
        
    })*/
    console.log(categorySave)
}



export const updateCategory = async(req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(!category) return res.status(404).json({message: 'category not found'})
    
    res.status(201).json(category)
}
export const deleteCategory = async(req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    if(!category) return res.status(404).json({message: 'category not found'})
    
    res.status(204)
}
