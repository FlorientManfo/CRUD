const formReducer = (state, data) => {
  if(data.target){
    return { ...state, [data.target.name]: data.target.value };
  }
  return data;
};

export default formReducer;