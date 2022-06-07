import axios from "axios";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export const getArticles = () => (dispatch) => {
  (async () => {
    try {
      const response = await axios.get(
        "https://react-yazi-yorum.herokuapp.com/posts"
      );
      dispatch({ type: "TypeGetArticleList", payload: response.data });
    } catch {
      dispatch({
        type: "TypeGetArticleListError",
        payload: "Fehler beim Laden der Artikelliste.",
      });
    }
  })();
};

export const getArticle = (id) => (dispatch) => {
  const { api } = useContext(AppContext);

  (async () => {
    try {
      const response = await api().get(`/posts/${id}`);
      dispatch({ type: "TypeGetArticleDetail", payload: response.data });
    } catch {
      dispatch({
        type: "TypeGetArticleDetailError",
        payload: "Fehler beim Laden des Artikels.",
      });
    }
  })();
};

export const getComment = (id) => (dispatch) => {
  const { api } = useContext(AppContext);

  (async () => {
    try {
      const response = await api().get(`/posts/${id}/comments`);
      dispatch({ type: "TypeGetArticleComment", payload: response.data });
    } catch {
      dispatch({
        type: "TypeGetArticleCommentError",
        payload: "Fehler beim Laden von Kommentaren.",
      });
    }
  })();
};
