import styles from './projects.module.css';

const Projects = () => {

return(
    <section className={styles.projects} id="work">
      <div className={styles.row}>
        <h2>Mine Projekter</h2>
        <div className={styles.workboxes}>


          <div className={styles.workbox}>
            <div className={styles.worktext}>
              <h3>Outdoors</h3>
              <p>
                En skoleopgave.
              </p>
              <ul className={styles.worklist}>
                <li>HTML</li>
                <li>CSS</li>
              </ul>

            <div className={styles.workimagebox}>
              <img src="public/outdoors.PNG" className={styles.workimage} alt="outdoors" />
            </div>
              <div className={styles.worklinks}>
                <a href="" target="_blank" className={styles.linktext}>
                  Se side <span>&rarr;</span>
                </a>
                <a href="https://github.com/mjc1909/Favorites">
                  <img src="public\github.svg" class="work__code" title="View Source Code" alt="GitHub" />
                </a>
                
              </div>
            </div>
          </div>

         
          <div className={styles.workbox}>
            <div className={styles.worktext}>
              <h3>GastroPub</h3>
              <p>
                En skoleopgave.
              </p>
              <ul className={styles.worklist}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>

            <div className={styles.workimagebox}>
              <img src="public/gastropub.PNG" className={styles.workimage} alt="outdoors" />
            </div>
              <div className={styles.worklinks}>
                <a href="" target="_blank" className={styles.linktext}>
                  Se side <span>&rarr;</span>
                </a>
                <a href="https://github.com/mjc1909/Favorites">
                  <img src="public\github.svg" class="work__code" title="View Source Code" alt="GitHub" />
                </a>
                
              </div>
            </div>
          </div>
          





        </div>


      </div>
    </section>
)


 }

 export default Projects;