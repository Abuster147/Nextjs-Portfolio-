import styles from '../styles/ProjectsPage.module.css';

const Skills = () => {
    return (
      <>
        <>
            <div className={styles.Skills}>
                <h2>Technical Skills</h2>
                <div className={styles.empty}></div>
                <div className={styles.one}>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
                <hr/>
                <div className={styles.empty}></div>
            </div>
            <ul className={styles.main}>
                <li className={styles.text}>
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <div className={styles.empty}></div>
                <li className={styles.text}>
                    <div> My areas of expertise are <strong className={styles.orange}>full-stack development, React.js & javascript!</strong></div>
                </li>
                <div className={styles.empty}></div>
                <li className={styles.text}>
                    <div>I am also an active Machine Leaning and Deep Learning enthusiast with Natural Language Processing, Recurrent Neural Networks and Recommendation systems research.</div>
                </li>
                <div className={styles.empty}></div>
                <li className={styles.text}>
                    <div>I am an active Codeforces Participant with <strong className={styles.orange}>max rating of 1602</strong> and over 1000+ algorithmic problems solved.!</div>
                </li>
                <div className={styles.empty}></div>
                <li className={styles.text}>
                    <div>Here are my most frequently used</div>
                </li>
                <div className={styles.empty}></div>
                <div className={styles.empty}></div>
                
            </ul>
            <div className={styles.languages}>
                <div className={styles.languages1}>Languages & Tools</div>
                <div className={styles.languages1}>Frameworks & Libraries</div>
            </div>
            <div className={styles.empty}></div>
            <div className={styles.empty}></div>
            <div className={styles.languages}>
                <div className={styles.languages2}>
                    <div className={styles.languages3}>
                        <img className={styles.image} src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="vivek javascript" />
                        <img className={styles.image} src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="vivek c++" />
                        <img className={styles.image} src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="vivek python" />
                        <img className={styles.image} src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="vivek dart" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="vivek HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="vivek SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="vivek git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="vivek firebase" className="m-1" />
                    </div>
                </div>
                <div className={styles.languages2}>
                    <div className={styles.languages3}>
                        <img className={styles.image} src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="vivek next" />
                        <img className={styles.image} src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="vivek react" />
                        <img className={styles.image} src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="vivek flutter" />
                        <img className={styles.image} src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="vivek tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="vivek node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="vivek jquery" className="m-1" />
                        <img className={styles.image} src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="vivek redux" />
                    </div>
                </div>
            </div>
            <div className={styles.empty}></div>
            <div className={styles.empty}></div>
            <div className={styles.empty}></div>
            <ul className={styles.languages3}>
                <li className={styles.languages3}>
                    <span> And of course,</span> <img className={styles.image} src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
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
  
  export default Skills;
  