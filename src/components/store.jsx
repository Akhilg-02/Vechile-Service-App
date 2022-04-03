import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/store.css";
//import { Storedata } from "../db";

export const Store = () => {
  const [data, setData] = useState([]);
  // const [rate , setRate] = useState("");
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/store/${id}`);
    console.log(id);
  };

  const getData = () => {
    fetch(`http://localhost:3000/Storedata`)
      .then((d) => d.json())
      .then((res) => {
        let data = res;
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Store</h1>
      <br />

      <div className="container">
        <div className="row">
          {data.map((el) => {
            const { title, image, rating, id } = el;
            return (
              <div className="col-lg-4 col-md-3 mt-5">
                <div className="card" style={{ width: "18rem" }} key={id}>
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">Rating: {rating}⭐</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      onClick={() => handleDetail(id)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
