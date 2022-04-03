import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const home = () =>{
    navigate("/")
  }
  return (
    <>
      <nav className="navbar navbar-light bg-secondary n-shadow-lg p-3   rounded   ">
        <div className="container-fluid">
          
            <img
               onClick={home}
               style={{cursor:"pointer"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfoMzJdBXGHH5eA3fT3akpBqDNEveYZxoAw&usqp=CAU"
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-text-top rounded"
            />
            <h4>+Service</h4>
            
         
        </div>
      </nav>
    </>
  );
};
