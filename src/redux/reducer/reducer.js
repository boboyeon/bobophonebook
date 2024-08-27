let initialState = {
  contactList: [], // 연락처가 입력되는 배열
  keyword: "", // 검색어 저장
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state }; // 스위치문 디폴트값
  }
}

export default reducer;
