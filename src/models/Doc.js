import { Schema, model } from "mongoose"
import timezone from 'mongoose-timezone'

const docSchema = new Schema(
  {
    category: String,
    title: String,
    status: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      default: ''
    },
    nameFile: {
      type: String,
      default: ''
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

docSchema.plugin(timezone)
export default model("Doc", docSchema);