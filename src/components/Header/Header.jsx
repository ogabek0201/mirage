import React from "react";
import Container from "../s-components/Container";
import Flex_con from "../s-components/Flex_con";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.png";
import Text from "../s-components/Text";
import Btn from "../s-components/Btn";
import { useTranslation } from "react-i18next";


function Header() {
  const { t, i18n } = useTranslation();
  return (
    <Container data-aos="fade-down" bg='#fff'>
      <Flex_con h="90px" gap="40px" jes="space-between!important" align='center'>
        <img src={logo} alt="" />
        <div className="list">
          <Flex_con align='center' gap='32px'>
            <Text color="#56597A" w='500' size='20px'>{t('navbar.text1')}</Text>
            <Text color="#AAAAAB" w='500' size='20px'>{t('navbar.text2')}</Text>
            <Text color="#AAAAAB" w='500' size='20px'>{t('navbar.text3')}</Text>
            <Text color="#AAAAAB" w='500' size='20px'>{t('navbar.text4')}</Text>
            <img src={menu} alt="" />
          </Flex_con>
        </div>  
      </Flex_con>
    </Container>
  );
}

export default Header;
