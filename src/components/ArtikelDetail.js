import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ArtikelDetail = () => {
  const { id } = useParams();

  const [articleDetails, setArticleDetails] = useState([]);

  useEffect(() => {
    (async () => {
      setArticleDetails(
        (await axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`))
          .data
      );
    })();
  });

  return (
    <>
    
      <h2 className="ui header">{articleDetails.title}</h2>
      <p>{articleDetails.created_at}</p> 
      <p>{articleDetails.content}</p> 
    </>
  );
};

export default ArtikelDetail;
