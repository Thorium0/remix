import _axios from "@/plugins/axios";

export const getBanners = () => _axios.post("/banner");
export const getNewSongs = () => _axios.post("/top/song?type=0");
export const getRecMV = () => _axios.post("/personalized/mv");
export const getHotDj = () => _axios.post("/dj/hot");
export const getHotPlayList = () => _axios.post("/top/playlist/highquality");