import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searcHandler = () => {
    navigate("/search?keyword=" + keyword);
  };
  return (
    <div className="input-group">
      <input
        type="text"
        id="search_field"
        onChange={(e) => setKeyword(e.target.value)}
        className="form-control"
        onBlur={searcHandler} //this is for when the search field is empty it have to display all products automatically
        placeholder="Enter Product Name ..."
      />
      <div className="input-group-append">
        <button id="search_btn" onClick={searcHandler} className="btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
