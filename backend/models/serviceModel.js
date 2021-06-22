import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
        type: Number,
    },
    category:{
        type: String,
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
