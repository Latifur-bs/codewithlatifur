import fs from 'fs';
import path from 'path';
import IntroBanner from '@component/components/IntroBanner/IntroBanner';
import TechnicalSkills from '@component/components/technicalSkills/technicalSkills';
import Experiences from '@component/components/experiences/experiences';



export default function Home({biodata}) {
  return (
    <>
      <IntroBanner introInfo={biodata[0].personalInfo} />
      <TechnicalSkills skills={biodata[0].technicalSkill}/>
      <Experiences experiences={biodata[0].experience}/>
    </>
  )
}


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/MyData.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      biodata: data
    }
  }
}