import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();

    return(
        <h1>{t('Nav.AboutMe')}</h1>
    );
}
export default AboutMe;