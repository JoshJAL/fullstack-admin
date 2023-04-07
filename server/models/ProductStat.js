import mongoose from 'mongoose';

const productStatSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true
    },
    yearlySalesTotal: {
      type: Number,
      required: true
    },
    yearlyTotalSoldUnits: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: false
    },
    monthlyData: [
      {
        month: {
          type: String,
          required: true
        },
        totalSales: {
          type: Number,
          required: true
        },
        totalUnits: {
          type: Number,
          required: true
        }
      }
    ],
    dailyData: [
      {
        date: {
          type: String,
          required: true
        },
        totalSales: {
          type: Number,
          required: true
        },
        totalUnits: {
          type: Number,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

const ProductStat = mongoose.model('ProductStat', productStatSchema);

export default ProductStat;
