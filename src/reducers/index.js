const initialState = {
  articles: [],
  articlesError: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TypeGetArticles":
      return { ...state, articles: action.payload };
    case "TypeGetArticlesError":
      return { ...state, articlesError: action.payload };
    default:
      return state;
  }
};
