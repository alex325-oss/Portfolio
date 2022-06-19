import React from 'react';
import { DiAws, DiDatabase, DiFirebase, DiRasberryPi, DiReact, DiZend  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Aqui algumas tecnologias que até o momento tenho conhecimento e experiencias com elas, mas sinto que posso aprender muito mais. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Fron-End</ListTitle>
          <ListParagraph>
            Experiencia com <br />
            React.js e HTML E CSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experincia com <br />
            Node.JS, FireBase e um pouco de SQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>APIs</ListTitle>
          <ListParagraph>
            Experiencia com <br />
            Commerce.js, Stripe.js e uma base em AWS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>    
);

export default Technologies;
