import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Comment from "App/Models/Comment";
import CreateCommentValidator from "App/Validators/CreateCommentValidator";

export default class CommentsController {
  async getComment({ request, response }: HttpContextContract) {
    const comment = await Comment.findOrFail(request.param("userId"));
    return response.json(comment);
  }

  async getAllComment({ response }: HttpContextContract) {
    const comments = await Comment.all();
    return response.json(comments);
  }

  async createComment({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCommentValidator);
    const comment = await Comment.create(payload);
    return response.json(comment);
  }

  async updateComment({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCommentValidator);
    const getCommentId = request.params();
    const comment = await Comment.updateOrCreate(
      { id: getCommentId.id },
      payload
    );
    return response.json(comment);
  }
}
