import Advice from '../models/asesoria.model.js';



export const getAdvices = async (req,res) => {

    const advice = await Advice.find({
        user: req.user.id
    }).populate('user');
    res.json(advice);
};

export const getAdvice = async (req,res) => { 

    const advice = await Advice.findById(req.params.id);
    if(!advice) return res.status(404).json({ message: 'advice Not Found' });
    res.status(200).json(advice);
};

export const createAdvice = async (req,res) => { 

    const { clientName, description, date } = req.body;

    const newAdvice = new Advice ({ 
        clientName,
        description,
        date,
        user: req.user.id
    });
    const savedAdvice = await newAdvice.save(); 
    res.status(200).json(savedAdvice);
};

export const updateAdvice = async (req,res) => { 

    const advice = await Advice.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if(!advice) return res.status(404).json({ message: ' not Update advice'});
    return res.status(201).json(advice);
};

export const deleteAdvice = async (req,res) => {

    const advice = await Advice.findByIdAndDelete(req.params.id);
    if(!advice) return res.status(404).json ({ message: 'Deleted advice' })
    return res.sendStatus(204)
};