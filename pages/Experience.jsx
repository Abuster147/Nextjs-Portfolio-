import styles from '../styles/ProjectsPage.module.css';

const Experience = () => {
    return (
      <>
         <>
            <div className={styles.Skills}>
                <h1>Technical Experience </h1>
            </div>
            <div className={styles.empty}></div>
            <ul className={styles.Edu}>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                        Amazon India (Upcomming 2024 Summer Intern)
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.one}>Bangalore</div>
                    <div className={styles.Edu}>May 2024 - July 2024</div>
                    <div className={styles.Edu}>Applied Scientist Intern </div>
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Kapitalwise Inc New York (Remote Intern)
                    </div>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.one}>Remote</div> */}
                    <div className={styles.Edu}>Oct 2023 - Present</div>
                    <div className={styles.Edu}>Software Engineering Intern </div>
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       HeyCoach India  (Remote Intern)
                    </div>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.one}>Remote </div> */}
                    <div className={styles.Edu}>Aug 2023 - Oct 2023</div>
                    <div className={styles.Edu}>Software Engineering Intern </div>
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Befikra Community New Delhi (Winter Intern)
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.one}>Mumbai India</div>
                    <div className={styles.Edu}>Dec 2022 - Jan 2022</div>
                    <div className={styles.Edu}>Data Science Intern </div>
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                        Pediageek Mumbai (2022 Summer Intern)
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.one}>Mumbai India</div>
                    <div className={styles.Edu}>July 2022 - Sept 2022</div>
                    <div className={styles.Edu}>Full stack developer Intern </div>
                   
                </li>
               
            </ul>
        </>
        <>
            <div className={styles.Skills}>
                <h1>Extracurricular Involvement</h1>
            </div>
            <div className={styles.empty}></div>
            <ul className={styles.Edu}>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                        Manager Web Division, Science and Technology Council IIT Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    
                    <div className={styles.Edu}>jun 2023 - Present</div>
                    <div className={styles.one}>Science and Technology Council IIT Kanpur</div>
                   
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Coordinator, Association of Mechanical Engineers IIT Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.one}>Remote</div> */}
                    <div className={styles.Edu}>jun 2023 - Present</div>
                    <div className={styles.one}>Department of Mechanical Engineering IIT Kanpur</div>
                    
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Councilling Service, IIT Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    <div className={styles.Edu}>jun 2022 - Present</div>
                    <div className={styles.one}>Student Guide, Academic Mentor</div>
                    <div className={styles.one}></div>
                   
                    {/* <div className={styles.one}>Department of Mechanical Engineering IIT Kanpur</div> */}
                    
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Council Secretary, Media and Cultural Council, IIT Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.one}>Remote</div> */}
                    <div className={styles.Edu}>jun 2022 - may 2023</div>
                    {/* <div className={styles.one}>Department of Mechanical Engineering IIT Kanpur</div> */}
                    
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Web Secretary, Students' Gymkhana, IIT Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.one}>Remote</div> */}
                    <div className={styles.Edu}>Oct 2022 - Jun 2023</div>
                    <div className={styles.one}>Students' Gymkhana IIT Kanpur</div>
                    
                   
                </li>
                <div className={styles.empty}></div>
                <li className={styles.Edu}>
                    <div className={styles.orange}>
                       Creatives Secretary, Outreach Cell, IIT Kanpur
                    </div>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.one}>Remote</div> */}
                    <div className={styles.Edu}>Oct 2022 - Jun 2023</div>
                    <div className={styles.one}>Outreach Cell IIT Kanpur</div>
                    
                   
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
  
  export default Experience;
  