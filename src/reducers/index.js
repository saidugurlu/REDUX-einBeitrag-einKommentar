const initialState = {
  articles: [],
  articlesError: "",
  articleDetails: {
    id: "",
    title: "",
    content: "",
    created_at: "",
  },
  articleDetailsError: "",
  comments: [],
  commentsError: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TypeGetArticleList":
      return { ...state, articles: action.payload };
    case "TypeGetArticleListError":
      return { ...state, articlesError: action.payload };
    case "TypeGetArticleDetail":
      return { ...state, articleDetails: action.payload };
    case "TypeGetArticleDetailError":
      return { ...state, articleDetailsError: action.payload };
    case "TypeGetArticleComment":
      return { ...state, comments: action.payload };
    case "TypeGetArticleCommentError":
      return { ...state, commentsError: action.payload };
    default:
      return state;
  }
};
