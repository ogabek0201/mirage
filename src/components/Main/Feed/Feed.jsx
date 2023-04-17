import React from "react";
import Btn from "../../s-components/Btn";
import Flex_con from "../../s-components/Flex_con";
import Head from "../../s-components/Head";
import Text from "../../s-components/Text";
import "./st.css";
import { useTranslation } from "react-i18next";

const Feed = ({ user, names, jobs }) => {
  const { t, i18n } = useTranslation();
  return (
    
    <Flex_con w='100%'>
      <img src={user} alt="" className="c-img" />
      <div style={{textAlign:'start'}}>
            <Text color="#F78CB6" size="24px" w="500" m="0 0 30px" align='start'>
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
  );
};

export default Feed;
