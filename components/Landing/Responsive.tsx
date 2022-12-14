import styles from "../../styles/landing/responsive.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Responsive() {
  const container =
    typeof window !== "undefined"
      ? document.getElementById("responsive")
      : null;
  const handle =
    typeof window !== "undefined" ? document.getElementById("handle") : null;

  if (handle) {
    handle.addEventListener("mousedown", rightMouseDown);
  }

  function rightMouseDown(e: { preventDefault: () => void }) {
    e.preventDefault();
    document.onmousemove = rightElementDrag;
    document.onmouseup = closeDragElement;
  }

  function rightElementDrag(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();

    let width = 0;
    if (container != null) {
      width = e.clientX - container.offsetLeft;
    }

    const parentWidth =
      typeof window !== "undefined"
        ? document.getElementById("responsiveParent")?.offsetWidth
        : 0;

    if (parentWidth != undefined) {
      if (container != null && width >= 450 && width <= parentWidth + 64) {
        container.style.width = `${width - 72}px`;

        // console.log("parentWidth: " + parentWidth);
        // console.log("e.clientX: " + e.clientX);
        // console.log("width: " + width);
      }
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <motion.div
      id="responsiveParent"
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        backgroundColor: "#00000010",
        borderRadius: "1.25rem",
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
        delay: 0.25,
      }}
    >
      {/* <motion.div id="handle" className={styles.handle}
            drag
            dragConstraints={{
            }}>

            </motion.div> */}

      <Image src="/rickroll.gif" alt="" layout="fill" objectFit="contain" />
      <div
        id="responsive"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div id="handle" className={styles.handle}>
          <motion.div
            style={{
              display: "flex",
              position: "absolute",
              left: "-0.75rem",
              width: "2rem",
              height: "2rem",
              borderRadius: "1rem",
              backgroundColor: "#ccc",
              alignItems: "center",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <svg
              style={{ margin: "auto" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4C12.5523 4 13 4.44772 13 5L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 5C11 4.44772 11.4477 4 12 4Z"
                fill="black"
                fillOpacity="0.4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 10.9998C14.4477 10.9998 14 11.4475 14 11.9998C14 12.5521 14.4477 12.9998 15 12.9998L18.5859 12.9998L16.5858 14.9999L18 16.4141L21.7071 12.707C22.0976 12.3165 22.0976 11.6833 21.7071 11.2928L18 7.58569L16.5858 8.99991L18.5857 10.9998L15 10.9998ZM7.41418 9.00015L5.41409 11.0002L9 11.0002C9.55229 11.0002 10 11.448 10 12.0002C10 12.5525 9.55228 13.0002 9 13.0002L5.41428 13.0002L7.41418 15.0002L5.99997 16.4144L2.29286 12.7073C1.90234 12.3167 1.90234 11.6836 2.29286 11.293L5.99997 7.58594L7.41418 9.00015Z"
                fill="black"
              />
            </svg>
          </motion.div>
        </div>
        <div className={styles.bodyParent}>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
            <h2 className={styles.header}>Designing for Everyone</h2>
          </div>
          <p className={styles.body}>
            From massive monitors to minuscule mobiles, every good design should
            be accessible to everyone. That&apos;s why accessibility and
            usability are the keys to a perfect design and in turn, designer.
          </p>
          <div className={styles.cardRow}>
            <div className={[styles.card, styles.mobile].join(" ")}>
              <b>Mobile</b>
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <Image
                  src="/mobile.png"
                  placeholder="blur"
                  blurDataURL="/mobile-blur.png"
                  alt=""
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
              <span id={styles.mobileBg}/>
            </div>
            <div className={[styles.card, styles.tablet].join(" ")}>
              <b>Tablet</b>
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <Image
                  src="/tablet.png"
                  placeholder="blur"
                  blurDataURL="/tablet-blur.png"
                  alt=""
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
              <span id={styles.tabletBg}/>
            </div>
            <div className={[styles.card, styles.desktop].join(" ")}>
              <b>Desktop</b>
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <Image
                  src="/desktop.png"
                  placeholder="blur"
                  blurDataURL="/desktop-blur.png"
                  alt=""
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
              <span id={styles.desktopBg}/>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
