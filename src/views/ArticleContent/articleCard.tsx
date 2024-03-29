import React from 'react';
import { Card } from 'react-bootstrap';
import { Data } from './interfaces';
import { useTranslation } from 'react-i18next';

interface ArticleCardProps {
  content: Data
}

const ArticleCard: React.FC<ArticleCardProps> = ({content}) => {
  const { t } = useTranslation();
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <h2>{content.title}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h4>{content.subtitle}</h4>
          </Card.Title>
          <Card.Text>
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {content.createdAt}
          <br />
          {t('Home.ReadingTime')} ~ {content.timeRead}min
        </Card.Footer>
      </Card>
      <h6>{t('PageContent.LanguageDescription')} {content.writtenLanguage}</h6>
      <h6>{t('PageContent.Obs')}</h6>
    </>
  );
};

export default ArticleCard;
