import React, { useEffect, useRef, useState } from "react";
import Footer from "../Componets/MainComponents/Footer";
import Navbar from "../Componets/MainComponents/Navbar";
import Section1 from "../Componets/HomeComponents/Sections/Section1";
import Section4 from "../Componets/HomeComponents/Sections/Section4";
import Section5 from "../Componets/HomeComponents/Sections/Section5";
import Section6 from "../Componets/HomeComponents/Sections/Section6";
import Section7 from "../Componets/HomeComponents/Sections/Section7";
import Section8 from "../Componets/HomeComponents/Sections/Section8";
import Section9 from "../Componets/HomeComponents/Sections/Section9";
import { Section10 } from "../Componets/HomeComponents/Sections/Section10";
import { Section11 } from "../Componets/HomeComponents/Sections/Section11";
import { Section12 } from "../Componets/HomeComponents/Sections/Section12";
import { Section13 } from "../Componets/HomeComponents/Sections/Section13";
import Section14 from "../Componets/HomeComponents/Sections/Section14";
import EditableHero from "../Componets/HomeComponents/EditableHero";
import { getContent } from "../data/contentApi";
import { applyTextOverrides } from "../data/contentUtils";

const Home = () => {
  const [content, setContent] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    getContent()
      .then((data) => {
        if (isMounted) {
          setContent(data);
          document.documentElement.style.setProperty(
            "--primary-color",
            data.theme.primaryColor
          );
        }
      })
      .catch(() => {
        if (isMounted) {
          setContent(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (content && contentRef.current) {
      applyTextOverrides(contentRef.current, content.textOverrides);
    }
  }, [content]);

  return (
    <div ref={contentRef}>
      <Navbar />
      {content && <EditableHero content={content} />}
      <Section1 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Footer />
    </div>
  );
};

export default Home;
