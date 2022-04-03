import "../Css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useState } from "react";

export const Mainpage = () => {
  const [locate , setLocate] = useState(null);
  const navigate = useNavigate();



  const handleStore = () => {
    navigate("/store");
  };
  return (
    <>
      <div id="selectbox" className="container w-50">
        <select
          
          className="form-select form-select-md mb-3 "
          aria-label=".form-select-lg example"
          
          onClick={(e)=>{setLocate(e.target.value)
            console.log(locate);
          }
        
        }
         
        >
          <option selected>Locations</option>
          
          <option value="pune">Pune</option>
          <option value="delhi">Delhi</option>
          <option value="gwalior">Gwalior</option>
        </select>
        &nbsp; &nbsp;



        {/* <select
          className="form-select form-select-md mb-3 "
          aria-label=".form-select-lg example"
        >
          <option selected>Street</option>
          <option value="1">Wakad</option>
          <option value="2">C.P</option>
          <option value="3">S.Chavni</option>
        </select> */}
      </div>

      <button
        onClick={handleStore}
        type="button"
        className="btn btn-primary w-25"
      >
        View Store
      </button>
    </>
  );
};
