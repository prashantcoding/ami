const categoryReducer = (category, action) => {
  switch (action.type) {
    case "particular_category": {
        category=action.payload;
      return category;
    }
    default: {
      return category=`${localStorage.getItem('category')}`;
    }
  }
};
export default categoryReducer;
