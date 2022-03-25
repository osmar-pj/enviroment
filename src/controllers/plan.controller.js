import Plan from '../models/Plan.js'

export const createPlan = async (req, res) => {
  try {
    const { nm, qty, hora, date, type, userId } = req.body;
    const h = new Date(hora).getHours()
    const m = new Date(hora).getMinutes()
    const plan = await Plan.create({
      nm,
      qty,
      hora: m < 10 ? `${h}:0${m}` : `${h}:${m}`,
      date,
      type,
      userId,
    });
    res.status(200).json({
      saved: true,
      plan,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({});
    const plansPending = plans.filter(plan => plan.status === false)
    res.status(200).json({
      message: "ok",
      plans: plansPending,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findById(id);
    res.status(200).json({
      message: "ok",
      plan,
    });
  } catch (error) {
    console.error(error);
  }
}


export const updatePlanById = async (req, res) => {
  try {
    const { status, _id } = req.body
    const plan = await Plan.findByIdAndUpdate(_id, {
      status
    })
    res.status(200).json({
      message: "ok",
      plan,
    });
  } catch (error) {
    console.error(error);
  }
}

export const deletePlanById = async (req, res) => {
  try {
    const { id } = req.body;
    const plan = await Plan.findByIdAndDelete(id);
    res.status(200).json({
      message: "ok",
      plan,
    });
  } catch (error) {
    console.error(error);
  }
}