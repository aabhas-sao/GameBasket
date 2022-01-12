import getProductById from "../services/getById";

const getByIdController = async (req, res, next) => {
  const { id } = req.query;
  console.log(id);
  if (!id) {
    next();
  } else {
    const product = await getProductById(id);
    res.send(product);

  }
}

export default getByIdController;