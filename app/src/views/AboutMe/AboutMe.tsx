import {useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../Store/index'; // Importe o tipo RootState da sua store

function AboutMe() {
    const { t } = useTranslation();
    const currentLanguage = useSelector((state: RootState) => state.Languages.value);

    return(
        <>
            <h1>{t('Nav.AboutMe')}</h1>
            <h1>valor do redux {currentLanguage}</h1>
         </>
    );
}
export default AboutMe;