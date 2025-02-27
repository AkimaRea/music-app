import axios from "axios";

export const instance = axios.create({
  baseURL: `https://stage.metabot.dev/api/v1/bots/${
    import.meta.env.VITE_BOT_ID
  }`,
  responseType: "json",
  timeout: 5000,
  
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
});

/* 

  Шаблон URL-адреса конечной точки:
  https://адресплатформы/api/v1/bots/{bot_id}/call/{alias}

  authorization: Bearer <Access Token>
  Host: https://stage.metabot24.com

*/
