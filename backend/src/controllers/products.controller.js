import * as productService from '../services/product.service.js';

export const create = async (req, res) => {
    try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({"message": "Error en la operacion"})
  }
};

export const getAll = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({"message": "Error en la operacion"})
  }
};

export const remove = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({"message": "Error en la operacion"})
  }
};