import styles from "../../styles/pixelPerfect.module.scss";
import { motion, useAnimationControls } from "framer-motion";
import confetti from "canvas-confetti";

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function PixelPerfect() {
  const controls = useAnimationControls();
  const element =
    typeof window !== "undefined"
      ? (document.querySelector(".pixelPerfect") as HTMLElement | null)
      : null;

  const getDeltaOrigin = () => {
    let deltaX = 0;
    let deltaY = 0;

    if (element) {
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);

      deltaX = matrix.m41;
      deltaY = matrix.m42;
    }
    return Math.floor(Math.pow(Math.pow(deltaX, 2) + Math.pow(deltaY, 2), 0.5));
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={"pixelPerfect" + " " + styles.pixelPerfect}
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{
          opacity: 1,
          x: Math.floor(Math.random() * 60) - 30,
          y: Math.floor(Math.random() * 40) - 20,
        }}
        transition={{
          delay: 0.2,
        }}
        drag
        dragConstraints={{
          top: -20,
          left: -30,
          right: 30,
          bottom: 20,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        onDrag={() => {
          if (element) {
            element.style.animationDuration = `${
              getDeltaOrigin() / 150 + 0.05
            }s`;

            // set element of id distance to deltaOrigin
            const distance = document.querySelector(
              "#distance"
            ) as HTMLElement | null;
            if (distance) {
              distance.innerHTML = `You&apos;re ${getDeltaOrigin()} pixels off!`;
            }
          }
        }}
        onDragEnd={(event, info) => {
          if (element) {

            if (getDeltaOrigin() == 0) {
              
              setTimeout(() => {
                element.style.transform = "none";
              }, 300);
              element.style.backgroundImage = `none`;
              controls.start("visible");

              confetti({
                particleCount: 200,
                angle: 60,
                spread: 60,
                origin: { x: 0, y: 1 },
              });
              confetti({
                particleCount: 200,
                angle: 120,
                spread: 60,
                origin: { x: 1, y: 1 },
              });
            } else {
              element.style.backgroundImage = `linear-gradient(90deg, silver 50%, transparent 50%),
              linear-gradient(90deg, silver 50%, transparent 50%),
              linear-gradient(0deg, silver 50%, transparent 50%),
              linear-gradient(0deg, silver 50%, transparent 50%)`;
              controls.start("hidden");
            }
          }
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <h2>A True Pixel Perfectionist</h2>
          <motion.svg
            className={styles.svg}
            viewBox="0 0 1em 1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M4 8.01506C8.54219 7.31408 12.5901 5.88445 16.9985 4.96449C18.9519 4.55686 20.9979 4.39669 23.0449 4.59514C27.106 4.98887 30.1509 6.79571 33.9147 7.67991C38.8047 8.82866 43.3874 8.22074 48.272 7.35844C53.7693 6.38796 59.0801 4.874 64.6899 4.15055C68.1049 3.71016 71.5537 4.21826 73.7481 5.90839C74.8058 6.723 75.6347 7.56987 77.2469 8.01506C80.1792 8.82482 83.2834 8.6287 86.339 8.17922C89.1984 7.75862 91.9001 7.03153 94.7632 6.61974C96.7846 6.32899 99.4921 5.92491 101.557 6.31878C102.977 6.5897 104.17 7.13792 105.384 7.63887C107.169 8.37541 108.928 8.67705 111 9"
              stroke="url(#paint0_linear_8_52)"
              stroke-width="0.5rem"
              stroke-linecap="round"
              fill="none"
              strokeWidth="2"
              variants={pathVariants}
              initial={"hidden"}
              animate={controls}
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_52"
                x1="2.50466"
                y1="7.31211"
                x2="112.064"
                y2="11.4341"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00D2FF" />
                <stop offset="1" stopColor="#3A7BD5" />
              </linearGradient>
            </defs>
          </motion.svg>
          <span id="distance" className={styles.distance}></span>
        </div>
        <p>
          A single pixel can be the difference between a great design and a
          perfect one. That&apos;s why high-quality products rely on people who
          care about the most minute of details and can ensure you with the
          highest possible standards of design.
        </p>
      </motion.div>
    </div>
  );
}
