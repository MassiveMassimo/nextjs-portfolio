import styles from "../../styles/landing/editor.module.scss";
import { motion } from "framer-motion";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from '@uiw/codemirror-extensions-langs';
import React from "react";

export default function Editor() {
  const onChange = React.useCallback((value: string) => {
    console.log("value:", value);
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
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <h2>Developer-Friendly</h2>
      </div>
      <p>
        Don&apos;t worry developers, I won&apos;t bite. Having experience in
        frontend myself, I know how to effectively design meaningful user
        experiences without breaking developers&apos; backs.
      </p>
      <form className={styles.form}>
        <div>
          <h3>HTML</h3>
          <CodeMirror
            className={styles.editor}
            value="<p>hello world</p>"
            height="40vh"
            extensions={[langs.html()]}
            theme="dark"
            onChange={onChange}
          />
        </div>

        <div>
          <h3>CSS</h3>
          <CodeMirror
            className={styles.editor}
            value="p { color: red; }"
            height="40vh"
            extensions={[langs.sass()]}
            theme="dark"
            onChange={onChange}
          />
        </div>
      </form>
    </motion.div>
  );
}
