import React from 'react';
import Nav from './Nav';
import './styles.css';
import Me from './images/siddharth.png';
import Devices from './images/devices.svg';
import DanskeBank from './images/danske-bank.png';
import Asksai from './images/askai.jpg';
import { AiFillGithub, AiFillMediumCircle, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import {SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank, SiGeeksforgeeks} from 'react-icons/si';
import Cards from './Cards';
import TechCards from './TechCard';
import ListenAI from './images/ListenAI.jpg';
import {motion, useScroll} from 'framer-motion';
const Home = (props) => {
    const CompetitiveCodingDesc = "I love to solve algorithmic problems on sites like Leetcode, Codeforces and HackerRank. ";
    const FullStackDesc = "I love to code things from scratch and bring my ideas to life in the browser";
    const Academia = "Trying my best out there in the academic world ;)"
    const CompetitivePoints = ["Rated 3 stars on CodeChef & 5 stars on HackerRank", "Ranked in top 2k among 40k+ participants in Leetcode July weekly contest", "Solved 250+ Problems on Leetcode", "Global rank under 5k in GeeksForGeeks among 100k+ users"];
    const FullStackPoints = ["Backend - Node, .NET Core, .NET Framework", "Frontend - HTML, CSS, Bootstrap, React", "Cloud - Docker, Kubernetes, Openshift", "Languages - C++, C#, Java, Javascript"];
    const AcademiaPoints = ["10th grade - 9.6/10", "12th grade - 89.2%", "VIT University (CS Undergraduate) - 8.67/10"];
    return (
        <div>
            <Nav />
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition = {{duration:1}} >
                <div className='container intro'>
                    <div className='heading'>
                        <h1 className='extra-bold'>Programmer, blogger & a metalhead</h1>
                        <p>I love to code my thoughts into reality :)</p>
                    </div>
                    <img src={Me} className='me' />
                </div>
                <img src={Devices} className='devices' />
            </motion.div>
            <motion.div className='moreIntro' initial={{opacity:0}} whileInView={{opacity:1}} transition = {{duration:1}}>
                <div className='about'>
                    <h1 className='extra-bold'>Hi, I'm Siddharth. Nice to meet you!</h1>
                    <p>I am a software engineer at <a href="https://danskebank.com/" target="_blank" style={{textDecoration:'none', color:'#fcfbfc'}}>Danske Bank</a>. I love to solve algorithmic problems, develop cool web applications, write blogs on tech & space and binge on sitcoms (especially The Office) on my weekends off. Always up for any riveting discussions!</p>
                    <div className='btns'>
                        <p>👇My Competitive coding handles <br/>(a bit rusty for a while...will be making a comeback ;))</p>
                    <button className='mediaBtn' onClick={() => window.open('https://leetcode.com/Siddharth_S_Chandran/', '_blank')}><SiLeetcode size={"30px"} color={"white"}/></button>{ " " }
                    <button className='mediaBtn' onClick={() => window.open('https://www.hackerrank.com/Siddharth_20_02', '_blank')}><SiHackerrank size={"30px"} color={"white"}/></button>{ " " }
                    <button className='mediaBtn' onClick = {() => window.open('https://auth.geeksforgeeks.org/user/siddharth_s_chandran/practice/', '_blank')}><SiGeeksforgeeks size={"30px"} color={"white"}/></button>{ " " }
                    <button className='mediaBtn' onClick={() => window.open('https://www.codechef.com/users/sid_20022001', '_blank')}><SiCodechef size={"30px"} color={"white"}/></button>{ " " }
             
                    </div>
                </div>
                <motion.div className='talents' initial={{opacity:0}} whileInView={{opacity:1}} transition = {{duration:1}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-12'>
                                <TechCards company = {"Full Stack Development"} points = {FullStackPoints} desc = {FullStackDesc}/>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <TechCards company = {"Problem Solving"} points = {CompetitivePoints} desc = {CompetitiveCodingDesc}/>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <TechCards company = {"Acadedmia"} points = {AcademiaPoints} desc = {Academia}/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className='container experience' initial={{opacity:0}} whileInView={{opacity:1}} transition = {{duration:1}}>
                <h1 className='extra-bold'>Work Experience</h1>
                <motion.div className='row' initial={{opacity:0}} whileInView={{opacity:1}} transition = {{duration:1}}>
                    <div className='col-lg-3 col-md-12 '>
                        <Cards company={"Danske Bank"} position={"Associate SWE"} dates={"July, 2022 - Present"} logo={DanskeBank} />
                    </div>
                    <div className='col-lg-3 col-md-12 '>
                        <Cards company={"Danske Bank"} position={"SWE Intern"} dates={"Jan, 2022 - July, 2022"} logo={DanskeBank} />
                    </div>
                    <div className='col-lg-3 col-md-12 '>
                        <Cards company={"ListenAI"} position={"Sprint SWE Intern"} dates={"Oct, 2021 - Nov, 2021"} logo={ListenAI} />
                    </div>
                    <div className='col-lg-3 col-md-12 '>
                        <Cards company={"AskAI softech"} position={"Winter SWE Intern"} dates={"Dec, 2020 - Mar, 2021"} logo={Asksai} />
                    </div>
                </motion.div>
            </motion.div>
            <div className='container'>
                <div className='contact'>
                    <motion.div className='card contactCard' initial={{opacity:0}} whileInView={{opacity:1}} transition = {{duration:1}}>
                        <div className='container'>
                            <div className='row contactDetails'>
                                <div className='col-lg-4 col-md-12 projectStart'>
                                    <h1>Start a project?</h1>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <p>Interested in working together or just have a conversation about space, tech or sitcoms? We should queue up a time to chat over a cup of coffee :)</p>
                                </div>
                                <div className='col-lg-4 col-md-12 projectStart'>
                                    <button className='DoBtn' onClick={() => window.open('mailto:siddharthschandran45@gmail.com')}>🤟 Let's do this</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
            </div>
            <motion.div className='footer'>
                <p>{"<MillennialOptimizer/>"}</p>
                <div className='moreFooter'>
                    <p>Living, Learning & Leveling up</p>
                    <p>one day at a time</p>
                </div>
                <div className='btns'>
                    <button className='mediaBtn' onClick={() => window.open('https://github.com/DiligentCoder-20022001', '_blank')}><AiFillGithub size={"30px"} color={"white"}/></button> { " " }
                    <button className='mediaBtn' onClick={() => window.open('https://siddharthschandran44.medium.com/')}><AiFillMediumCircle size={"30px"} color={"white"}/></button>{ " " }
                    <button className='mediaBtn' onClick={() => window.open('https://www.instagram.com/millennial_pirate/?hl=en')}><AiFillInstagram size={"30px"} color={"white"}/></button>{ " " }
                    <button className='mediaBtn' onClick={() => window.open('https://www.linkedin.com/in/siddharth-s-chandran-1b96311b9/')}><AiFillLinkedin size={"30px"} color={"white"}/></button>{ " " }
                    <button className='mediaBtn' onClick={() => window.open('mailto:siddharthschandran45@gmail.com')}><AiOutlineMail size={"30px"} color={"white"}/></button>{ " " }
                    
                </div>
            </motion.div>
        </div>
    )
}
export default Home;