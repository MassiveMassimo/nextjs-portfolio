import Head from "next/head";
import Image from "next/image";
import Loader from "../components/Loader";
import Counter from "../components/Landing/Counter";
import PixelPerfect from "../components/Landing/PixelPerfect";
import Responsive from "../components/Landing/Responsive";
import Editor from "../components/Landing/Editor";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

import styles from "../styles/index.module.scss";

export default function Home() {
  const [loading, setLoading] = useState(true);
  let from = 0;
  let to = 80;

  // prevent page from scrolling
  if (typeof window !== "undefined") {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div>

      <main>
        <Loader show={loading} />
        <div className={styles.hero}>
          <div className={styles.heroHeadings}>
            <h3 className={styles.subheading}>Meet a next generation</h3>
            <TypeAnimation
              sequence={[
                "Product Designer",
                4000,
                "UX Researcher",
                4000,
                "Copywriter",
                4000,
                "UI Designer",
                4000,
                "Frontend Engineer",
                4000,
              ]}
              className={styles.heading}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
          <iframe
            id="spline"
            src="https://my.spline.design/portfoliohero-42c2c4614b0b42afdeb45b1d42f83c1f/"
            width="100%"
            height="100%"
            frameBorder="0"
            onLoad={() => {
              setLoading(false);
            }}
          ></iframe>
        </div>
        <section id="about" className={styles.about}>
          <div className={styles.tag}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M4 3C3.448 3 3 3.448 3 4V9C3 9.552 3.448 10 4 10C4.552 10 5 9.552 5 9V5H9C9.552 5 10 4.552 10 4C10 3.448 9.552 3 9 3H4ZM15 3C14.448 3 14 3.448 14 4C14 4.552 14.448 5 15 5H19V9C19 9.552 19.448 10 20 10C20.552 10 21 9.552 21 9V4C21 3.448 20.552 3 20 3H15ZM4 14C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20C10 19.448 9.552 19 9 19H5V15C5 14.448 4.552 14 4 14ZM20 14C19.448 14 19 14.448 19 15V19H15C14.448 19 14 19.448 14 20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14Z"
                fill="#03CDFD"
              />
              <path
                d="M12.0112 6C10.3555 6 9.01345 7.343 9.01345 9C9.01345 10.657 10.3555 12 12.0112 12C13.667 12 15.009 10.657 15.009 9C15.009 7.343 13.667 6 12.0112 6ZM11.012 13C9.28525 13 7.54055 14.118 7.04592 15.688C6.84307 16.332 7.33869 17 8.01419 17C9.02844 17 15.5026 17 16.0083 17C16.6928 17 17.1654 16.336 16.9456 15.688C16.4249 14.155 14.6972 13 13.0105 13H11.012Z"
                fill="#03CDFD"
              />
            </svg>
            About Me
          </div>
          <motion.div
            style={{
              position: "relative",
              padding: "2rem 0",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            >
              <InView as="div" threshold={0.25}>
                {({ inView, ref }) => {
                  return (
                    <div ref={ref}>
                      <Counter from={from} to={inView ? to : 0} />
                    </div>
                  );
                }}
              </InView>
              <h2>Years of Updates</h2>
              <span className={styles.amen}>(AMEN)</span>
            </div>
            <p>
              Hi I&apos;m Imo! With an actual lifetime guarantee, you can expect
              non-stop updates to forever improve your Imo experience.
            </p>
          </motion.div>
          
          <PixelPerfect />
          
          <Responsive />
          
          <motion.div
            style={{
              position: "relative",
              padding: "2rem 0",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            >
              <h2>Tested and Benchmarked</h2>
            </div>
            <p>
              Sometimes, a fancy website isn&apos;t enough to fully illustrate
              the capabilities of a designer. Sometimes, you need hard numbers.
              To guarantee industry levels of quality, thorough and
              comprehensive testing was conducted through numerous reputable
              benchmarks to ensure top notch design.
            </p>
          </motion.div>
          <Editor />
        </section>
        <section></section>
      </main>
    </div>
  );
}
