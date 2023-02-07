import { useEffect, useState } from "react";

function ProductCreation({ onAddProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ name, price, description });
    };

    useEffect(() => {
        setName("");
        setPrice("");
        setDescription("");
    }, [onAddProduct]);

    return (
        <div className="product-creation">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductCreation;
