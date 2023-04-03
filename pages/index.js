import path from 'path';
import IntroBanner from '@component/components/IntroBanner/IntroBanner';
import TechnicalSkills from '@component/components/technicalSkills/technicalSkills';
import Experiences from '@component/components/experiences/experiences';
import Layout from '@component/components/layout/layout';
import { useState } from 'react';
import fs from 'fs';

export default function Home({ biodata }) {
  const [MyData, setMyData] = useState(biodata);

  async function changeLanguage() {
    console.log('language Changed');
    const language = 'Bn'; // replace with selected language
    const data = await import(`../data/MyData${language}.json`);
    setMyData(data.default);
  }

  return (
    <>
      <Layout onChangeLanguage={changeLanguage}>
        <IntroBanner introInfo={MyData[0].personalInfo} />
        <TechnicalSkills skills={MyData[0].technicalSkill} />
        <Experiences experiences={MyData[0].experience} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/MyData.json');
  const jsonData = await fs.promises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      biodata: data,
    },
  };
}