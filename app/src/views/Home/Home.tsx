import './home.css'
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ArticleService } from '../../Services/articleService';
import { RootState } from '../../Store/index';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Home(){
  const service = new ArticleService();
  const [articles, setArticles] = useState<any[]>([]);
  const currentLanguage = useSelector((state: RootState) => state.Languages.value);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.get('api/article', currentLanguage);
        setArticles(response.data); 
        console.log(response);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    fetchData();
    },[]);

    return (
        <Row xs={1} md={2} className="g-4">
          {articles.map((article: any, index) => (
            <Col key={index}>
              <Card className='card'>
              <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{article.subtitle}</Card.Subtitle>
                  <Card.Text>
                    {article.resume}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>{article.tags}</div>
                  <div>{t('Home.ReadingTime')} ~ {article.timeRead}min</div>
                </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      );
}
export default Home;