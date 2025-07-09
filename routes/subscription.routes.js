import { Router } from "express";

const SubscriptionRouter = Router();

SubscriptionRouter.get("/", (req, res) => {
  res.send({
    title: "Subscriptions",
    message: "Get all subscriptions",
  });
});

SubscriptionRouter.get("/:id", (req, res) => {
  const { id } = req.params;  
  res.send({
    title: "Subscription Details",
    message: `Get subscription with ID ${id}`,
  }); 
});

SubscriptionRouter.post("/", (req, res) => {
  res.send({
    title: "Create Subscription",
    message: "Subscription created successfully",
  });
});

SubscriptionRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    title: "Update Subscription",
    message: `Subscription with ID ${id} updated successfully`,
  }); 
});

SubscriptionRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    title: "Delete Subscription",
    message: `Subscription with ID ${id} deleted successfully`,
  });
});


SubscriptionRouter.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  res.send({
    title: "User Subscriptions",
    message: `Get all subscriptions for user with ID ${userId}`,
  });
});

SubscriptionRouter.put('/:id/cancel', (req, res) => {
  const { id } = req.params;
  res.send({
    title: "Cancel Subscription",
    message: `Subscription with ID ${id} has been cancelled successfully`,
  });
})

SubscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({
    title: "Upcoming Renewals",
    message: "Get all subscriptions with upcoming renewals",
  });
})


export default SubscriptionRouter;