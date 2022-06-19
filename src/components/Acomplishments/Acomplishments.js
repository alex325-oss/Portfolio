import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 0, text: '?'},
  { number: 0, text: '?', },
  { number: 0, text: '?', },
  { number: 0, text: '?', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Experiencias em projetos</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>

);

export default Acomplishments;
