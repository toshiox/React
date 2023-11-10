import axios from 'axios';

export class ArticleService {
  private api;
  private baseURL = 'http://127.0.0.1:4567/';

  constructor() {
    this.api = axios.create({ baseURL: this.baseURL });
  }

  async get(endpoint: string, selectedLanguage: string) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}/${selectedLanguage}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
}
