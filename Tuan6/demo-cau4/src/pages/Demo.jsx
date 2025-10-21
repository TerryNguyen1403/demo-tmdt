import { useEffect, useState } from "react";

const Demo = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/api/product/all-products")
         .then((res) => {
            if(!res.ok) throw new Error("Lỗi đường truyền");
            return res.json();
         })
         .then((json) => {
            setMessage(json.message);
            setData(json.allProducts);
         })
         .catch((err) => console.error("Fetch error: ", err));
    })
    return (
        <div>
            <h2>{message}</h2>
            <ul>
                {data.map((d) => (
                <li key={d._id}>{d.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Demo;