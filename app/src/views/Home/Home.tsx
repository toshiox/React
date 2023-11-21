import './home.css'
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ArticleService } from '../../Services/articleService';
import { RootState } from '../../Store/index';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {loadingActions } from '../../Store/loading';

function Home(){
  const { t } = useTranslation();
  const service = new ArticleService();
  const [articles, setArticles] = useState<any[]>([]);
  const currentLanguage = useSelector((state: RootState) => state.Languages.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
        dispatch(loadingActions.setLoading({ isLoading: true }));
        const response = await service.get('api/article', currentLanguage);
        setArticles(response); 
        dispatch(loadingActions.setLoading({ isLoading: false }));
    };
    fetchData();
  },[currentLanguage]);

  return (
    <>
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
    </>
  );
}
export default Home;