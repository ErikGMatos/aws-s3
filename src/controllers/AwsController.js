const aws = require("aws-sdk");

class AwsController {
  async index(req, res) {
    try {
      const s3 = new aws.S3();
      const params = { Bucket: "erik-aws" };
      const data = await s3.listObjects(params).promise();

      return res.json(data);
    } catch (error) {
      if (error) return res.json({ error: "Erro ao tentar listar." });
    }
  }
}

module.exports = new AwsController();
