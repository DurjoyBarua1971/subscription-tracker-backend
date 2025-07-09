import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) =>
  res.send({
    title: "Sign Up",
    message: "User registration endpoint",
  })
);

authRouter.post("/sign-in", (req, res) =>
  res.send({
    title: "Sign In",
    message: "User login endpoint",
  })
);

authRouter.post("/sign-out", (req, res) =>
  res.send({
    title: "Sign Out",
    message: "User logout endpoint",
  })
);

export default authRouter;