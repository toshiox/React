import { useTranslation } from 'react-i18next';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function NavBar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage:string) => {
    i18n.changeLanguage(selectedLanguage, (err, t) => {
      if (err) {
        console.error('Erro ao mudar de idioma:', err);
      }
    });
  };

  const languageOptions = [
    { value: 'en', label: t('Languages.English') },
    { value: 'pt', label: t('Languages.Portuguese') },
  ];

  return (
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/Home">
            bits-n-bytes
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link>
              <Link to="/AboutMe">
                {t('Nav.AboutMe')}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/TextEditor">
                {t('Nav.TextEditor')}
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Select onChange={(e) => handleLanguageChange(e.target.value)}>
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
            <Form.Control type="search" placeholder={t('Inputs.PlaceHolders.KeyWord')} className="me-2" aria-label="Search"/>
            <Button variant="outline-success">{t('Buttons.Search')}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;