import {
    connection as db
} from "../config/config.js"
class Products {
    fetchProducts(req, res) {
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, imageURL, userID
        FROM Products;
        `
        db.query(qry, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res) {
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, imageURL, userID
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }

    createProduct(req, res) {
        // Payload
        let data = req.body;

        const qry = `
        INSERT INTO Products
        SET ?;
    `;

        db.query(qry, [data], (err) => {
            if (err) {
                res.json({
                    status: res.statusCode,
                    msg: 'Failed to add a new product.'
                });
            } else {
                res.json({
                    status: res.statusCode,
                    msg: 'New product added successfully.'
                });
            }
        });
    }
    
    updateProduct(req, res) {
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The product information has been updated."
            })
        })
    }
    
    deleteProduct(req, res) {
        const qry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The product information has been deleted."
            })
        })
    }
}
export {
    Products
}