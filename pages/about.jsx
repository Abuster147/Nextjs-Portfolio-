import styles from "../styles/ProjectsPage.module.css";

const AboutPage = () => {
  return (  
    <>
      <div className={styles.wrap}>
        <h2 className={styles.Skills}>A Little Bit About Me</h2>
        {/* <img
          className={styles.image1}
          src="./bitmoji.png"
          alt="Akash Kumar logo"
        /> */}
      </div>
      <div className={styles.empty}></div>
      <div className={styles.empty}></div>
      <>
        <div className={styles.one}>
          <div>
            
          </div>
  
        </div>
        <div className={styles.one}>
          <div className={styles.one}></div>
          <div className={styles.one}></div>
        </div>
        
        <ul className={styles.one}>
          <li>My name is <span className={styles.orange}>Akash Kumar</span> and I'm a Full Stack Engineer and NLP enthusiast.!</li>
          <div className={styles.empty}></div>
          <li className={styles.one}>
            I'm an <span className={styles.Skills}>IIT Kanpur Pre-Final Year Student</span>{" "}
            currently pursuing Mechanical Engineering.
          </li>
          <div className={styles.empty}></div>
          <li> I've completed my 3 month SWE
            intern at{" "}
            <u className=" cursor-pointer ">
              {" "}
              <a
                href="https://www.kapitalwise.com/"
                target={"_blank"}
              >
                Kapitalwise Inc New York</a>{" "}
            </u>
          , and now I'm looking for full-time SWE roles! ( Hit
            me up{" "}
            <a className="text-underline" href="mailto:akash123iitk@gmail.com">
              <u>@akash123smr@gmail.com</u>
            </a>{" "}
            :) )</li>
            <div className={styles.empty}></div>
          <li className={styles.one}>
            {" "}
            I enjoy building awesome softwares that solve practical problems.
          </li>
          <div className={styles.empty}></div>
          <li className={styles.one}>
            {" "}
            When I am not coding my next project, I like to spend my time
            reading books, playing Valorant or Listening to{" "}
            <a className="orange"
              href="https://www.youtube.com/watch?v=EW4pNzAbVao"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Bombay Dreams.!
            </a>
          </li>
          <div className={styles.empty}></div>
          <li className={styles.one}>
            {" "}
            And I also have interest in Deep Learning & Natural Language Processing!
          </li>
        </ul>
      </>
      <div className={styles.empty}></div>
      <div className={styles.empty}></div>
      <div>
        <h2 className={styles.Skills}>Achievements</h2>
        <ul>
        <div className={styles.empty}></div>
          <li>
          Secured Rank 1 in the CBSE Class X board examinations 2018 in Andhra Pradesh State by scoring 98.4%
          </li>
          <div className={styles.empty}></div>
          <li>
          Among the top 1% of 1.5 million applicants in Jee Mains 2021 and top 3% of 2.5 lakh applicants in Jee Advanced 2021
          </li>
          <div className={styles.empty}></div>
          <li>Selected in Amazon ML Summer School 2023 among 20k participants and got an interview opportunity for Applied Scientist Intern at Amazon Bangalore.</li>
          <div className={styles.empty}></div>
          
          <li>Expert 1605 on Codeforces with over 600 problems solved on topics including Dynamic Programming, Graph Theory</li>
          <div className={styles.empty}></div>
          <li>Among the top 18 teams in Boston Consulting Group’s Bruce Henderson Insight Ideathon Phase II</li>
          <div className={styles.empty}></div>
          <li>Secured top 50 rank among 60k+ participants in Xiaomi Ode2Code 3.0 Coding Challenge conducted by Xiaomi India</li>
          <div className={styles.empty}></div>
          <li>Semi-finalist in TVS-Credit E.P.I.C 5.0—IT Challenge Hackathon among 50k+ participants conducted by TVS group</li>
          <div className={styles.empty}></div>
          <li>Secured rank 667 at the International Collegiate Programming Contest (ICPC) Kanpur-Mathura 2022 Qualifier Round</li>
          <div className={styles.empty}></div>
          <li>Active Participant on Codechef with Global Rank 133 in Staters 48 and achieved Max Rating of 1849</li>
          <div className={styles.empty}></div>
          <li>Secured top 100 rank in Tata Imagination Challenge 2023 among 2.5 lakhs participants conducted by Tata Group </li>
        </ul>

      </div>

    </>
    
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
