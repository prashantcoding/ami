const categoryReducer = (event, action) => {
    switch (action.type) {
      case "particular_event": {
          event=action.payload;
        return event;
      }
      default: {
        return event=`${localStorage.getItem('event')}`;
      }
    }
  };
  export default categoryReducer;
  