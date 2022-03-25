import { Schema, model } from "mongoose"
import timezone from 'mongoose-timezone'

const planSchema = new Schema(
  {
    nm: String,
    qty: Number,
    hora: String,
    date: Date,
    type: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    status: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

planSchema.plugin(timezone)
export default model("Plan", planSchema);