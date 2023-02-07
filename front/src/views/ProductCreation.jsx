import ProductCreation from "../components/ProductCreation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductCreationPage() {
    const navigate = useNavigate();
    const ReceiveData = (name, price, description) => {
        const data = { name, price, description };
        axios
            .post("http://localhost:5173/products", data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const IntoCustomerAccount = () => {
        navigate("/home");
    };

    return (
        <ProductCreation
            ReceiveData={ReceiveData}
            IntoCustomerAccount={IntoCustomerAccount}
        />
    );
}

export default ProductCreationPage;
