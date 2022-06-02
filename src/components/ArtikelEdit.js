import ArtikelForm from "./ArtikelForm";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import { useParams } from "react-router-dom";

const ArtikelEdit = () => {
  const { api } = useContext(AppContext);
  const [articleToEdit, setArticleToEdit] = useState({})
  const { id } = useParams();
    
  
  useEffect(() => {
    (async () => {
      setArticleToEdit((await api().get(`/posts/${id}`)).data);
  
      })();
  },[]);


  return (
    <>
      <h1>Artikel bearbeiten</h1>
      <ArtikelForm type="edit"  article={articleToEdit} />
    </>
  );
};

export default ArtikelEdit;
