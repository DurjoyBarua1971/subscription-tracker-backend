import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({
    title: "User Profiles",
    message: "Get all users",
  });
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    title: "User Profile",
    message: `Get user with ID ${id}`,
  });
});

userRouter.post("/", (req, res) => {
  res.send({
    title: "Create User",
    message: "User created successfully",
  });
});

// put is used to update an existing resource
// patch is used to update a part of an existing resource
userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    title: "Update User",
    message: `User with ID ${id} updated successfully`,
  });
});

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    title: "Delete User",
    message: `User with ID ${id} deleted successfully`,
  });
});

export default userRouter;