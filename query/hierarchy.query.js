const QUERY = {
    SELECT_PRODUCTS: 'SELECT * FROM products ORDER BY created_at DESC LIMIT 100',
    SELECT_PRODUCT: 'SELECT * FROM products WHERE id = ?',
    CREATE_PRODUCT: 'INSERT INTO products(name) VALUES(?)',
    UPDATE_PRODUCT: 'UPDATE products SET name = ? WHERE id=?',
    DELETE_PRODUCT: 'DELETE FROM products WHERE id = ?',
}


export default QUERY;