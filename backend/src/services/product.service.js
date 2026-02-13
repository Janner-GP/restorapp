import { pool } from '../config/dbconfig.js';

export const createProduct = async ({ name, price, description }) => {
  const query = `
    INSERT INTO products (name, price, description)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const values = [name, price, description];

  const { rows } = await pool.query(query, values);

  return rows[0];
};

export const getAllProducts = async () => {
  const { rows } = await pool.query(
    `SELECT * FROM products ORDER BY id DESC`
  );

  return rows;
};

export const deleteProduct = async (id) => {
  const { rowCount, rows } = await pool.query(
    `DELETE FROM products WHERE id = $1 RETURNING *`,
    [id]
  );

  if (rowCount === 0) return null;

  return rows[0];
};
