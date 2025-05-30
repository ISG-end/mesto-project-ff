export const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-6",
    headers: {
      authorization: "258ad69c-3ec0-40c1-801f-8bd6241cc156",
      "Content-Type": "application/json",
    },
  };
  
  export const getResData = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };
  ///Загрузка информации о пользователе с сервера
  export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  ///Загрузка карточек с сервера
  export const getInitialCards = async () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  ///
  export const getInitialInfo = async () => {
    return Promise.all([getUserInfo(), getInitialCards()]);
  };
  /////редактирование профайла
  export const editProfile = async (userProfileName, userProfileAbout) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: userProfileName,
        about: userProfileAbout,
      }),
    }).then((res) => getResData(res));
  };
  
  ////Добавление новой карточки на сервер
  export const postNewCard = async (nameCard, linkCard) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: nameCard,
        link: linkCard,
      }),
    }).then((res) => getResData(res));
  };
  ///+ лайк
  export const putLike = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  
  ///удаление лайка
  export const deleteLike = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  // удаление карточки
  export const deleteMyCard = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  
  export const updateNewAvatar = async (avatarLink) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then((res) => getResData(res));
  };
  