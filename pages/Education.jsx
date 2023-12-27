import styles from '../styles/ProjectsPage.module.css';

const Education = () => {
    return (
      <>
         <>
            <div className={styles.Skills}>
                <h1>Education</h1>
            </div>
            <div className={styles.empty}></div>
            <ul className={styles.Edu}>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                        Indian Institute of Technology Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.Edu}>2021 - 2025</div>
                    <div className={styles.Edu}>Mechanical Engineering </div>
                    <div className={styles.Edu}>CPI &nbsp; 7.3/10</div>
                    <div className={styles.Edu}>Surviving Mechanical Somehow</div>
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                        FIITJEE Junior College Visakhapatnam
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.Edu}>2018 - 2020</div>
                    <div className={styles.Edu}>Maths, Physics, Chemistry</div>
                    <div className={styles.Edu}>CGPA &nbsp; 9.2/10</div>
                    <div className={styles.Edu}>Cleared JEE Somehow</div>
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Akshara School Class 10<sup>th</sup> (CBSE)
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.Edu}>2010 - 2018</div>
                    <div className={styles.Edu}>Maths, Physics, Chemistry</div>
                    <div className={styles.Edu}>State Rank 1&nbsp;Percentage - 98.4%</div>

                </li>
               
            </ul>
        </>
       
   </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'About' },
    };
  }
  
  export default Education;
  