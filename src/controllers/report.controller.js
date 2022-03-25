import Report from '../models/Report.js';

export const createReport = async (req, res) => {
  try {
    const { nm, place, date, category, path, userId } = req.body;
    const report = await Report.create({
      nm,
      place,
      date,
      category,
      userId,
    });
    res.status(200).json({
      saved: true,
      report,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find({});
    res.status(200).json({
      message: "ok",
      reports,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);
    res.status(200).json({
      message: "ok",
      report,
    });
  } catch (error) {
    console.error(error);
  }
}

export const updateReportById = async (req, res) => {
  try {
    const { id, title, content } = req.body;
    const report = await Report.findByIdAndUpdate(id, {
      title,
      content,
    });
    res.status(200).json({
      message: "ok",
      report,
    });
  } catch (error) {
    console.error(error);
  }
}

export const deleteReportById = async (req, res) => {
  try {
    const { id } = req.body;
    const report = await Report.findByIdAndDelete(id);
    res.status(200).json({
      message: "ok",
      report,
    });
  } catch (error) {
    console.error(error);
  }
}