import { Schema, model } from 'mongoose';
import timezone from 'mongoose-timezone';

const reportSchema = new Schema(
  {
    nm: String,
    place: String,
    date: Date,
    category: String,
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

reportSchema.plugin(timezone)
export default model("Report", reportSchema);