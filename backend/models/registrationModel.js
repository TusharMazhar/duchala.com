import mongoose from 'mongoose'

const registrationSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
        type: Number,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
  },
  {
    timestamps: true,
  }
  
)

const Registration = mongoose.model('Registration', registrationSchema)

export default Registration