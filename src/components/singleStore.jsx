import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import { Storedata } from "../db";

export const SingleData = () => {
  const [single, setSingledata] = useState({});
  const [count , setCount] = useState(0);
  console.log("empty:", single);

  const navigate = useNavigate();

  const { id } = useParams();
  //console.log(id);

  const handleCount = () =>{
    setCount(1 + count);
  }

  // ------------------------------------------------------------- For oil click

  const addOil = () => {
    // console.log(`we are in cart${single}`)
    // setCart([...cart,product])

    fetch("http://localhost:3000/oil", {
      method: "POST",
      body: JSON.stringify(single),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    alert("Added to cart");
  };

  // ------------------------------------------------------------- For wash click

  const addWash = () => {
    fetch("http://localhost:3000/wash", {
      method: "POST",
      body: JSON.stringify(single),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    alert("Added to cart");
  };

  //------------------------------------------------------------ For AC click

  const addAc = () => {
    fetch("http://localhost:3000/AC", {
      method: "POST",
      body: JSON.stringify(single),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Added to cart");
  };

  // =========================================
  // Single data by id
  // =========================================

  const setData = () => {
    fetch(`http://localhost:3000/Storedata/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setSingledata(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  useEffect(() => {
    setData();
  }, []);
  //--------------------------------------------------------------------------

  const handleCart_oil = (id) => {
    navigate(`/store/${id}/cart`);
  };

  //----------------------------------------------------------------------------

  const {
    title,
    image,
    rating,
    desp,
    oiling,
    wash,
    Ac_clean,
    oil_pic,
    wash_pic,
    ac_pic,
    ac,
    oil,
    clean,
  } = single;

  return (
    <div>
      {/* ******************** Cart ************************* */}
      <br />
      <div>
        <FaShoppingCart
          onClick={() => handleCart_oil(id)}
          
          style={{
            float: "right",
            marginRight: "12%",
            color: "yellow",
            cursor:"pointer",
            fontSize: "3vw",
          }}
          
        />
        
      </div>
      {/* *********************************************** */}
      <div className="container mt-5">
        <div className="row">
          <div
            className="card mb-3 bg-success"
            style={{ maxwidth: "540px", height: "350px" }}
          >
            <div className="row g-0">
              <div className="col-md-4 mt-5">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8 mt-5">
                <div className="card-body">
                  <h3 className="card-title">{title}</h3>
                  <h5 className="card-title">Rating: {rating}⭐</h5>
                  <br />
                  <p className="card-text fw-bold">{desp}</p>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------- SERVICES ----------------------------- */}

      <div className="container">
        <div className="card-group">
          <div className="card">
            <img src={oil_pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{oil}</h5>
              <p className="card-text">₹{oiling}</p>
              <button
                onClick={addOil}
                type="button"
                className="btn btn-primary"
              >
                ADD
              </button>
            </div>
          </div>

          <div className="card">
            <img src={wash_pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <br />
              <h5 className="card-title mt-5">{clean}</h5>
              <p className="card-text ">₹{wash}</p>
              <button
                type="button"
                onClick={addWash}
                className="btn btn-primary"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="card">
            <img src={ac_pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <br />
              <br />

              <h5 className="card-title mt-5">{ac}</h5>
              <p className="card-text">₹{Ac_clean}</p>
              <button type="button" onClick={addAc} className="btn btn-primary">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//onClick={() =>handleDetail(id)}
