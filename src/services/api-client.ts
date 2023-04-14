import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "883f8da7b4cc4dae8701246afcef2c86",
  },
});
