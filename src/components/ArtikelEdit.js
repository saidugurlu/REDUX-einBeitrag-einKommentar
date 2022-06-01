import ArtikelForm from "./ArtikelForm";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import { useParams } from "react-router-dom";

const ArtikelEdit = () => {
  const { api } = useContext(AppContext);
  const [edit, setEdit] = useState({})
  const { id } = useParams();
    
  
  useEffect(() => {
    (async () => {
        setEdit((await api().get(`/posts/${id}`)).data);
  
      })();
  });


  return (
    <>
      <h1>Artikel bearbeiten</h1>
      <ArtikelForm  title={edit.title} content={edit.content} />
    </>
  );
};

export default ArtikelEdit;
