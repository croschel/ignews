import Head from "next/head";
import styles from "./styles.module.scss";

export default function posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>creating something like this</strong>
            <p>
              lorem ipsum enum lorem ipsum enumlorem ipsum enumlorem ipsum
              enumlorem ipsum enumlorem ipsum enumlorem ipsum enumlorem ipsum
              enumlorem ipsum enumlorem ipsum enum
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>creating something like this</strong>
            <p>
              lorem ipsum enum lorem ipsum enumlorem ipsum enumlorem ipsum
              enumlorem ipsum enumlorem ipsum enumlorem ipsum enumlorem ipsum
              enumlorem ipsum enumlorem ipsum enum
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>creating something like this</strong>
            <p>
              lorem ipsum enum lorem ipsum enumlorem ipsum enumlorem ipsum
              enumlorem ipsum enumlorem ipsum enumlorem ipsum enumlorem ipsum
              enumlorem ipsum enumlorem ipsum enum
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
