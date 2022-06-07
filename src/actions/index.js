import axios from "axios";

export const getArticles = () => (dispatch) => {
  (async () => {
    try {
      const response = await axios
        .get("https://react-yazi-yorum.herokuapp.com/posts")
        dispatch({ type: "TypeGetArticles", payload: response.data });
    } catch {
      dispatch({
        type: "TypeGetArticlesError",
        payload: "Beim Laden der Artikel ist ein Fehler aufgetreten.",
      });
    }
  })();
};
