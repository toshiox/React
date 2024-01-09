import axios from 'axios';

export class ArticleService {
  private api;
  private baseURL = 'http://127.0.0.1:4567/';

  constructor() {
    this.api = axios.create({ baseURL: this.baseURL });
  }

  async get(selectedLanguage: string) {
    try {
      var redis = await this.getRedis(selectedLanguage);
      if(redis !== undefined && redis.length > 0){
        return redis;
      }
      return (await this.getDb(selectedLanguage)).data;
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
  async getDb(selectedLanguage: string) {
    try {
      const response = await axios.get(`${this.baseURL}api/article/${selectedLanguage}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
  async putArticle(content: object) {
    try {
      const response = await axios.put(`${this.baseURL}api/article`, content);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
    }
  }
  async getRedisById(id: String){
    try {
      const response = await axios.get(`${this.baseURL}/api/redis/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
}