import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { 
  createSubscription, 
  getUserSubscriptions,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
  cancelSubscription,
  getUpcomingRenewals
} from "../controllers/subscription.controller.js";

const SubscriptionRouter = Router();

SubscriptionRouter.use(authorize);

SubscriptionRouter.get("/", getAllSubscriptions);

SubscriptionRouter.get("/upcoming-renewals", getUpcomingRenewals);

SubscriptionRouter.get("/:id", getSubscriptionById);

SubscriptionRouter.post("/", createSubscription);

SubscriptionRouter.put("/:id", updateSubscription);

SubscriptionRouter.delete("/:id", deleteSubscription);

SubscriptionRouter.get("/user/:id", getUserSubscriptions);

SubscriptionRouter.put("/:id/cancel", cancelSubscription);

export default SubscriptionRouter;
