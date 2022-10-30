import styles from "../../styles/landing/editor.module.scss";
import { motion } from "framer-motion";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import React from "react";

export default function Editor() {
  let html = `<div className="developer-friendly">
  <div>
    <h2>Developer-Friendly</h2>
  </div>
  <p>
    <!--&apos; were used because React doesn't like apostrophes-->
    Don&apos;t worry developers, I won&apos;t bite. Having experience in
    frontend myself, I know how to effectively design meaningful user
    experiences without breaking developers&apos; backs.
  </p>
</div>`;
  let css = `h2 {
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 800;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }

  .developer-friendly {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }`;
  const onChangeHTML = React.useCallback((value: string) => {

    const newWrapper = `<div jsx id="wrapper">\n` + value + `\n</div>`;
    const wrapper = document.getElementById("wrapper");
    if (wrapper) {
      wrapper.innerHTML = newWrapper;
    }
  }, []);

  const onChangeCSS = React.useCallback((value: string) => {
    console.log(value);

    // const newStyle = `<style id="styles">{\`\n` + value + `\n\`}</style>`;
    const newStyle = `{\`\n` + value + `\n\`}`;

    const styles = document.getElementById("styles");
    console.log(styles);
    if (styles) {
      styles.innerHTML = newStyle;
    }
  }, []);


  return (
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
      <style jsx id="styles">{`
        h2 {
          font-family: "Inter", sans-serif;
          font-size: 3rem;
          font-weight: 800;
        }

        p {
          font-family: "Inter", sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.6);
        }

        .developer-friendly {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
      `}</style>
      <div id="wrapper">
        <div className="developer-friendly">
          <div>
            <h2>Developer-Friendly</h2>
          </div>
          <p>
            Don&apos;t worry developers, I won&apos;t bite. Having experience in
            frontend myself, I know how to effectively design meaningful user
            experiences without breaking developers&apos; backs.
          </p>
        </div>
      </div>
      <form className={styles.form}>
        <div>
          <h3>HTML</h3>
          <CodeMirror
            className={styles.editor}
            value={html}
            height="40vh"
            width="45vw"
            extensions={[langs.html()]}
            theme="dark"
            onChange={onChangeHTML}
          />
        </div>

        <div>
          <h3>CSS</h3>
          <CodeMirror
            className={styles.editor}
            value={css}
            height="40vh"
            width="45vw"
            extensions={[langs.sass()]}
            theme="dark"
            onChange={onChangeCSS}
          />
        </div>
      </form>
    </motion.div>
  );
}
