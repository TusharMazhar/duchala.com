import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema(
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

const Service = mongoose.model('Service', serviceSchema)

export default Service
