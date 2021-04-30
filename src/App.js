import React from 'react';
import HeaderContent from './components/header/header.content'
import NavBar from './components/nav/nav.bar';
import SectionContent from './components/section/section.content';
import SectionBackground from './components/section/section.background';
import SectionExampleProject from './components/section/section.example.project';
import SectionContact from './components/section/section.Contact';
import FooterContent from './components/footer/footer.content';
function App() {
  return (
    <>
      <NavBar/>
      <HeaderContent/>
      <SectionContent/>
      <SectionBackground/>
      <SectionExampleProject/>
      <SectionContact/>
      <FooterContent/>

    </>
  );
}

export default App;
