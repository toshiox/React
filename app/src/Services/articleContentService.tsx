import axios from 'axios';

export class ArticleContentService {
    private api;
    private baseURL = 'http://127.0.0.1:4567/';
  
    constructor() {
      this.api = axios.create({ baseURL: this.baseURL });
    }

    async get(payload: object) {
      try {
        // var redis = await this.getRedis(selectedLanguage);
        // if(redis !== undefined && redis.length > 0){
        //   return redis;
        // }
        var response = await this.getDb(payload);
        return response;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    async getRedis(selectedLanguage: string) {
      try {
        const response = await axios.get(`${this.baseURL}api/redis/articles/${selectedLanguage}`);
        return response.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    async getDb(content: object) {
      try {
        const response = await axios.post(`${this.baseURL}api/articleContent/content`, content);
        return response.data.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    async putArticleContent(content: object) {
      try {
        const response = await axios.put(`${this.baseURL}api/articleContent`, content);
        return response.data;
      } catch (error) {
        console.error('Erro ao atualizar dados:', error);
      }
    }
  }
  