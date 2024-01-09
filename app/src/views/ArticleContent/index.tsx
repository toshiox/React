import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../Store/index';
import React, { useState, useEffect } from 'react';
import {loadingActions } from '../../Store/loading';
import { ArticleService } from '../../Services/articleService';
import ArticleCard from './articleCard';

const serviceContent = new ArticleService();

const ArticleContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState(Object);
  const currentLanguage = useSelector((state: RootState) => state.Languages.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadingActions.setLoading({ isLoading: true }));
        const result = await serviceContent.getRedisById(`${id}_${currentLanguage}`);
        result.createdAt = format(new Date(result.createdAt), 'dd/MM/yyyy HH:mm');
        setContent(result);
        dispatch(loadingActions.setLoading({ isLoading: false }));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, [id, currentLanguage]);

  return <>
    <ArticleCard content={content} />
  </>;
};

export default ArticleContent;
