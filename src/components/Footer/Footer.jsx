import React from "react";
import Container from "../s-components/Container";
import Flex_con from "../s-components/Flex_con";
import Head from "../s-components/Head";
import Text from "../s-components/Text";
import logo from "../../assets/img/logo.png";
import soc from "../../assets/img/soc.png";
import wind from "../../assets/img/window.png";
import {useTranslation} from "react-i18next";
import {Select} from 'antd';

function Footer() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <>
            <Container bgi={wind} m='0px 0 0'>
                <Flex_con jes='space-between' align='center' h='430px'>
                    <div className="col">
                        <img src={logo} alt=""/>
                        <Text wid='240px' color='#546285' m='30px 0 0'>
                            {t('footer.text1')}
                        </Text>
                        <Head size='20px' w='500' color='#919299'>{t('footer.text2')}</Head>
                        <img src={soc} alt=""/>
                    </div>
                    <Flex_con gap='120px'>
                        <div className="col">
                            <Head size='24px' w='500' color='#56597A'>{t('footer.text3')}</Head>
                            <Text color='#546285' m='28px 0'>{t('footer.text4')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text5')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text6')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text7')}</Text>
                        </div>
                        <div className="col">
                            <Head size='24px' w='500' color='#56597A'>{t('footer.text8')}</Head>
                            <Text color='#546285' m='28px 0'>{t('footer.text9')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text10')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text11')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text12')}</Text>
                        </div>
                        <div className="col">
                            <Head size='24px' w='500' color='#56597A' m='0 0 20px'>{t('footer.text13')}</Head>
                            <Text color='#546285' m='28px 0'>{t('footer.text9')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text10')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text11')}</Text>
                            <Text color='#546285' m='28px 0'>{t('footer.text12')}</Text>
                        </div>
                    </Flex_con>
                </Flex_con>
            </Container>
            <Container bg='#F78CB6'>
                <Flex_con h='54px' align='center' jes='space-between'>
                    <Text wid='300px' w='450'>{t('li')}</Text>
                    <Select
                        defaultValue="en"
                        style={{
                            width: 60,
                        }}
                        onChange={changeLanguage}
                        options={[
                            {
                                value: 'ru',
                                label: 'ru',
                            },
                            {
                                value: 'en',
                                label: 'en',
                            },
                            {
                                value: 'tj',
                                label: 'tj',
                                disabled: true,
                            },
                        ]}
                    />
                </Flex_con>
            </Container>
        </>
    );
}

export default Footer;
