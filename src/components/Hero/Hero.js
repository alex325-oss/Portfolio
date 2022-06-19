import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo ao <br />
        Meu Portifolio Pessoal, Sinta-se confortavel  
      </SectionTitle>
      <SectionText>
        Sou um jovem que ama o mundo da programação e quer aprender mais desse mundo e melhorar minhas habilidades para que possa cada vez mais evoluir no ramo.
      </SectionText>
      <Button onClick={() => window.location ='https://github.com/alex325-oss'}>Ver Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;