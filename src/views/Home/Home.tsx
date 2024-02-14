import './home.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../Store/index';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { loadingActions } from '../../Store/loading';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import { ArticleService } from '../../Services/articleService';

const service = new ArticleService();

function Home(){
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [articles, setArticles] = useState<any[]>([]);
  const currentLanguage = useSelector((state: RootState) => state.Languages.value);

  useEffect(() => {
    const fetchData = async () => {
        dispatch(loadingActions.setLoading({ isLoading: true }));
        const response = await service.get(currentLanguage);
        console.log(response);
        setArticles(response); 
        dispatch(loadingActions.setLoading({ isLoading: false }));
    };
    fetchData();
  },[currentLanguage]);

  return (
    <Row xs={1} md={2} className="g-4">
      {articles.map((article: any, index) => (
        <Link key={index} to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
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
       </Link>
      ))}
    </Row>
  );
}
export default Home;