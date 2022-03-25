import Doc from '../models/Doc.js'
import Plan from '../models/Plan.js'
import Report from '../models/Report.js'

export const createDoc = async (req, res) => {
  try {
    const { title, category, userId } = req.body;
    const doc = await Doc.create({
      title,
      category,
      userId,
    });
    res.status(200).json({
      saved: true,
      doc,
    });
  } catch (error) {
    console.error(error)
  }
}

export const getDocs = async (req, res) => {
  try {
    const docs = await Doc.find({});
    const docStatus = docs.filter(doc => doc.status === true)
    const plans = await Plan.find({})
    const planStatus = plans.filter(plan => plan.status === true)
    const reports = await Report.find({})
    res.status(200).json({
      docs,
      docStatus: docStatus.length / docs.length * 100,
      planStatus: planStatus.length / plans.length * 100,
      reports: reports.length
    });
  } catch (error) {
    console.error(error);
  }
}

export const getDocById = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Doc.findById(id);
    res.status(200).json({
      message: "ok",
      doc,
    });
  } catch (error) {
    console.error(error);
  }
}

export const updateDocById = async (req, res) => {
  try {
    const file = req.file
    const data = JSON.parse(req.body.data)
    console.log(file, data)
    const { id, title, content } = req.body;
    const doc = await Doc.findByIdAndUpdate(id, {
      title,
      content,
    });
    res.status(200).json({
      message: "ok",
      doc,
    });
  } catch (error) {
    console.error(error);
  }
}

export const deleteDocById = async (req, res) => {
  try {
    const { id } = req.body;
    const doc = await Doc.findByIdAndDelete(id);
    res.status(200).json({
      message: "ok",
      doc,
    });
  } catch (error) {
    console.error(error);
  }
}