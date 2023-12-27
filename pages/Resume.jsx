import React from 'react';
import styles from '../styles/ProjectsPage.module.css';

const Resume = () => {
  return (
    <>
      <iframe className={styles.Resume} src="./Akash.pdf" title="Akash Kumar resume" frameBorder="0"></iframe>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default Resume;