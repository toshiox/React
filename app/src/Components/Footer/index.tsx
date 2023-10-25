import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const FooterContainer = styled.footer`
height: 100%;
color: white;
padding: 1em;
text-align: center;
`
const ListSocialMedia = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`
const ItemSocialMedia = styled.li`
list-style-type: none;
margin-right: 5px;
`
function Footer() {
    return (
        <FooterContainer>
            <ListSocialMedia>
                <ItemSocialMedia>
                    <SocialIcon url="https://github.com/toshiox"/>
                </ItemSocialMedia>
                <ItemSocialMedia>
                    <SocialIcon url="https://www.linkedin.com/in/gustavo-toshio-a40213155/" />
                </ItemSocialMedia>
            </ListSocialMedia>
        </FooterContainer>
    )
}
export default Footer;