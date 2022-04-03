import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/cart.css";

export const Cart = () => {
  const [oil, setOil] = useState([]);
  const [wash, seTWash] = useState([]);
  const [ac, setAc] = useState([]);

  const { id } = useParams();

  const cartData_oil = () => {
    fetch(`http://localhost:3000/oil/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setOil(res);
        //console.log(res);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  useEffect(() => {
    cartData_oil();
  }, []);
  //----------------------------------------------------------------------
  const cartData_wash = () => {
    fetch(`http://localhost:3000/wash/${id}`)
      .then((d) => d.json())
      .then((res) => {
        seTWash(res);
        //console.log(res);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  useEffect(() => {
    cartData_wash();
  }, []);

  //---------------------------------------------------------------

  const cartData_ac = () => {
    fetch(`http://localhost:3000/Ac/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setAc(res);
        //console.log(res);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  useEffect(() => {
    cartData_ac();
  }, []);

  //---------------------------------------------------------------

  const delOil = () => {
    fetch(`http://localhost:3000/oil/${id}`, {
      method: "DELETE",
      body: JSON.stringify(oil),
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
  };

  //---------------------------------------------------------------

  const delwash = () => {
    fetch(`http://localhost:3000/wash/${id}`, {
      method: "DELETE",
      body: JSON.stringify(oil),
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
  };

  //---------------------------------------------------------------

  const delAc = () => {
    fetch(`http://localhost:3000/Ac/${id}`, {
      method: "DELETE",
      body: JSON.stringify(oil),
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="container">
          {/* ------------------- LEFT ------------------------- */}
          <div className="left">
        <div className="oil">
          <h3>Service:{oil.oil}</h3>
          <img src={oil.image} alt="" />
          <h4>Price:{oil.oiling}</h4>

            
          <button type="button" className="btn btn-primary" onClick={delOil}>
            Remove
          </button>
          
        </div>

        <div className="wash">
          <h3>Service:{wash.clean}</h3>
            <img src={wash.image} alt="" />
          <h4>Price:{wash.wash}</h4>
          <button type="button" className="btn btn-primary" onClick={delwash}>
            Remove
          </button>
        </div>

        <div className="Ac">
          <h3>Service:{ac.ac}</h3>
          <img src={ac.image} alt="" />
          <h4>Price:{ac.Ac_clean}</h4>
          <button type="button" className="btn btn-primary" onClick={delAc}>
            Remove
          </button>
        </div>
        </div>
        {/* -------------------- RIGHT ------------------------- */}

        <div className="right">
            <h1 style={{color:"lightyellow"}}>Checkout</h1>
            <h5 style={{color:"lightyellow"}}>Payment Total: <br />   {oil.oiling} + {wash.wash} + {ac.Ac_clean} </h5>
               <div><hr /></div>
             <h1 style={{color:"lightyellow"}}>Grand total :</h1>
        </div>
      </div>
    </>
  );
};
