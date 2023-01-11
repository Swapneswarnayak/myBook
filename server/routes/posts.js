import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const postRoutes = express.Router();

postRoutes.get("/", verifyToken, getFeedPosts);
postRoutes.get("/:userId/posts", getUserPosts);

postRoutes.patch("/:id/like", verifyToken, likePost);

export default postRoutes;
