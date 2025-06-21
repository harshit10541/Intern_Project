
// import annexureAModel from '../models/annexureA.model.js';
// import annexureBModel from '../models/annexureB.model.js';
// import annexureCModel from '../models/annexureC.model.js';
import { annexureAModel} from '../models/annexureA.model.js';
import { annexureBModel } from '../models/annexureB.model.js';
import { annexureCModel } from '../models/annexureC.model.js';


const models = {
    a: annexureAModel,
    b: annexureBModel,
    c: annexureCModel,
};

const createAnnexure = async (req, res) =>{
    try{
        // res.json({[req.params.type.toLowerCase()]: "get all"});
        const type = req.params.type.toLowerCase();
        const Model = models[type];
        
        // if (!Model) return res.status(400).json({error: 'Invalid annexure type.'});

        // const exists = await Model.findOne({
        //     applicationId: req.body.applicationId,
        //     userId: req.user.id,

        // });

        // if (exists) return res.status(409).json({error: 'Annexure already exists. Use PUT to update'});

        // const annexure = new Model({...req.body, userId: req.user.id});

        const annexure = new Model({...req.body});
        await annexure.save();

        res.status(201).json(annexure);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

const updateAnnexure = async (req, res) => {
  try {
    const type = req.params.type.toLowerCase();
    const Model = models[type];

    if (!Model) return res.status(400).json({ error: 'Invalid annexure type.' });

    const updated = await Model.findOneAndUpdate(
      { applicationId: req.body.applicationId, userId: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ error: 'Annexure not found.' });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {createAnnexure, updateAnnexure};