import axios from "axios";

// 1. HTTP Request & Reponse 관련된 기본 설정
const config = {
  baseUrl: "http://localhost:8080/",
};

// 2. API 함수들을 정리
async function createBoard(data) {
  try {
    let response = await axios.post(`${config.baseUrl}board`, data);
    return response.status;
  } catch (error) {
    console.log(error);
  }
}

async function getBoards(data) {
  try {
    let response = await axios.get(`${config.baseUrl}board`, {
      params: data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getBoard(data) {
  try {
    let response = await axios.get(`${config.baseUrl}board/${data}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { createBoard, getBoards, getBoard };
