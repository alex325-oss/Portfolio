import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
        <Link href="/">
          <a style={{diplay: "flex", alignItems: "center", color: "white", marginBottom: '20;'}}>
            <DiCssdeck size="3rem" /><Span>Portifolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#project">
            <NavLink>Projetos</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Tecnologia</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>sobre</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/alex325-oss">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/alex-raimundo-422663240/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/alexraimundo01/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
