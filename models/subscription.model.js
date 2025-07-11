import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription Name is required"],
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, "Subscription Price is required"],
      min: [0, "Price cannot be negative"],
      max: [100000, "Price cannot exceed 100000"],
    },
    currency: {
      type: String,
      required: [true, "Currency is required"],
      enum: ["USD", "EUR", "INR", "BDT"],
      default: "USD",
    },
    frequency: {
      type: String,
      required: [true, "Billing Cycle is required"],
      enum: ["Monthly", "Yearly", "Weekly"],
      default: "Monthly",
    },
    category: {
      type: String,
      required: [true, "Subscription Category is required"],
      enum: [
        "Entertainment",
        "Utilities",
        "Food & Drink",
        "Health & Fitness",
        "Education",
        "Software & Apps",
        "News & Magazines",
        "Gaming",
        "Travel & Transport",
        "Other",
      ],
      required: true,
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment Method is required"],
      enum: ["Credit Card", "Debit Card", "PayPal", "Bank Transfer", "Other"],
      default: "Credit Card",
    },
    status: {
      type: String,
      required: [true, "Subscription Status is required"],
      enum: ["Active", "Cancelled", "Expired", "Paused"],
      default: "Active",
    },
    startDate: {
      type: Date,
      required: [true, "Subscription Start Date is required"],
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start Date cannot be in the future",
      },
    },
    renewalDate: {
      type: Date,
      required: [true, "Subscription Renewal Date is required"],
      validate: {
        validator: function (value) {
          return this.startDate < value;
        },
        message: "Renewal Date must be after Start Date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true, // Index for faster lookups
    },
  },
  {
    timestamps: true,
  }
);

subscriptionSchema.pre("save", function (next) {
  // Auto-calculate renewal date if missing
  if (!this.renewalDate) {
    const frequencyMap = {
      Monthly: 30,
      Yearly: 365,
      Weekly: 7,
    };
    const startDate = new Date(this.startDate);
    const daysToAdd = frequencyMap[this.frequency] || 1;
    const renewalDate = new Date(startDate);
    renewalDate.setDate(startDate.getDate() + daysToAdd);
    this.renewalDate = renewalDate;
  }
  // Auto-update status based on renewal date
  if (this.renewalDate < new Date()) {
    this.status = "Expired";
  }
  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
