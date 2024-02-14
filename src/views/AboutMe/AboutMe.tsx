import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ArticleService } from '../../Services/articleService';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/index';
import { format } from 'date-fns';
import ArticleCard from '../ArticleContent/articleCard';
import {loadingActions } from '../../Store/loading';

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
        const result = await serviceContent.getRedisById(`654a44012bd6ebb1202d3c77_${currentLanguage}`);
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
    </>
};

export default ArticleContent;
