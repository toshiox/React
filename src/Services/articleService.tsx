import axios from 'axios';

export class ArticleService {
  private api;
  private baseURL = 'https://code-ruby-d09fcda02656.herokuapp.com/';

  constructor() {
    this.api = axios.create({ baseURL: this.baseURL });
  }

  async get(selectedLanguage: string) {
    try {
      var content = await this.getRedis(selectedLanguage);
      if (content.length === 0) {
        const response = await this.getDb(selectedLanguage);
        content = response.data;
      }
  
      return content.slice().sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
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