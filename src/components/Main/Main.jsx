import React, { useEffect } from "react";
import Container from "../s-components/Container";
import one from "../../assets/img/1.png";
import two from "../../assets/img/2,1.svg";
import tw from "../../assets/img/2,2.png";
import t from "../../assets/img/2,3.png";
import o from "../../assets/img/2,4.png";
import three from "../../assets/img/3.png";
import check from "../../assets/img/check.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.png";
import user from "../../assets/img/user.png";
import soc from "../../assets/img/soc.png";
import Head from "../s-components/Head";
import Text from "../s-components/Text";
import Btn from "../s-components/Btn";
import Flex_con from "../s-components/Flex_con";
import Eat from "./Service/Service";
import Feed from "./Feed/Feed.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const eat = [
  {
    img: two,
    h: "Design",
    p: "a plan or drawing produced to show the look and function ",
  },
  {
    img: tw,
    h: "Development",
    p: "Development is defined as the process of growth or new ",
  },
  {
    img: t,
    h: "Branding",
    p: "The marketing practice of creating a name, symbol or ",
  },
  {
    img: o,
    h: "Illustration",
    p: "An illustration is a decoration, interpretation or visual ",
  },
];

const feed = [
  { user: user,},
  { user: user,},
  { user: user,},
  { user: user,},
];

function Main() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Container
        m="50px 0"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Flex_con>
          <div>
            <Text color="#F78CB6" size="28px" w="500" m="0 0 30px">
            {t('one.text1')}
            </Text>
            <Head w="700" size="64px" wid="610px" color="#56597A">
            {t('one.text2')}
            </Head>
            <Text color="#919299" wid="575px" size="20px" m="30px 0 40px">
            {t('one.text3')}
            </Text>
            <Btn
              color="#FFFFFF"
              size="20px"
              p="16px 32px"
              border="4px"
              bg="#F78BB6"
            >
              {t('get')}
            </Btn>
          </div>
          <img src={one} alt="" width={552} className="img" />
        </Flex_con>
      </Container>
      <Container p="100px 0 0">
        <Text align="center" size="28px" w="500" color="#F78CB6">
          {t('two.text1')}
        </Text>
        <Head
          m="6px 0 60px"
          data-aos="zoom-in"
          p="100px 0 0"
          color="#56597A"
          w="700"
          size="52px"
          align="center"
        >
          {t('two.text2')}
        </Head>
        <Flex_con gap="30px" p="0 0 150px" data-aos="flip-up">
          {eat.map((e) => (
            <Eat {...e} />
          ))}
        </Flex_con>
        <Flex_con
          p="0 0 300px"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          gap="50px"
        >
          <img src={three} alt="" width={700} className="img" />
          <div>
            <Text color="#F78CB6" size="28px" w="500" m="0 0 30px">
              {t('two.text3')}
            </Text>
            <Head w="700" size="54px" wid="600px" color="#56597A">
            {t('two.text4')}
            </Head>
            <Text color="#919299" wid="575px" size="20px" m="30px 0 40px">
            {t('two.text5')}
            </Text>
            <Btn
              color="#FFFFFF"
              size="20px"
              p="16px 32px"
              border="4px"
              bg="#F78BB6"
            >
              {t('get')}
            </Btn>
          </div>
        </Flex_con>
      </Container>
      <Container>
        <Flex_con data-aos="fade-up" data-aos-duration="3000">
          <div>
            <Text color="#F78CB6" size="28px" w="500" m="0 0 30px">
            {t('three.text1')}
            </Text>
            <Head w="700" size="64px" wid="610px" color="#56597A">
            {t('three.text2')}
            </Head>
            <Text color="#919299" wid="575px" size="20px" m="30px 0 40px">
              {t('three.text3')}
            </Text>
            <Btn
              color="#FFFFFF"
              size="20px"
              p="16px 32px"
              border="4px"
              bg="#F78BB6"
            >
              {t('get')}
            </Btn>
          </div>
          <img src={four} alt="" className="img" />
        </Flex_con>
      </Container>
      <Container p="100px 0">
        <Swiper
          spaceBetween={1000}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {feed.map((e) => (
            <SwiperSlide>
              <Feed {...e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}

export default Main;
