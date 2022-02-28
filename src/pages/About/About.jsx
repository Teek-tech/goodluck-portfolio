import Container from '../../components/Container/Container'
import { HeartIcon } from '@heroicons/react/solid'
import { UploadIcon } from '@heroicons/react/outline';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { StyledWrapper, StyledSection, StyledMainSection, StyledSidebar, StyledIntro, StyledSkillsSection, StyledSkills, StyledSkill, StyledServices, StyledOtherServices, StyledActions, StyledIcon } from './styles';


const About = () => {
    return (
        <AnimatedPage>
            <StyledWrapper>
                <Container>
                    <StyledSection>
                        <StyledMainSection>
                            <StyledIntro>
                                <h4>Introduction</h4>
                                <p>My country name is <span>Goodluck Junior Allen.</span> <br /> I specialize in solving  complex  problems through design thinking  and with  a wide range of experience.</p>
                            </StyledIntro>

                            <StyledSkillsSection>
                                <h4>skills</h4>
                                <StyledSkills>
                                    <div>
                                        <StyledSkill>
                                            <h5>product design</h5>
                                            <p>
                                                UI Design, Prototyping, User empathy, Interaction design, Mini-interaction design Productt Design Specification, Documentation, Qualitative user research, Product Analysis
                                            </p>
                                        </StyledSkill>
                                    </div>
                                    <div>
                                        <StyledSkill>
                                            <h5>Conceptualization</h5>
                                            <p>Sketching, Storyboarding, Animation Sprites</p>
                                        </StyledSkill>

                                        <StyledSkill>
                                            <h5>web design</h5>
                                            <p>HTML, CSS, JAVA SCRIPT (I only understand how they work. I dislike coding)</p>
                                        </StyledSkill>
                                    </div>
                                    <div>
                                        <StyledSkill>
                                            <h5>Communication</h5>
                                            <p>Fluent in American English and pidgin english</p>
                                        </StyledSkill>

                                        <StyledSkill>
                                            <h5>ideation</h5>
                                            <p>Brainstorming, Sketching, Mind Mapping, Storyboarding, Bodystorming</p>
                                        </StyledSkill>
                                    </div>
                                </StyledSkills>
                            </StyledSkillsSection>

                        </StyledMainSection>
                        <StyledSidebar>
                            <StyledServices>
                                <h4>my services</h4>
                                <ul>
                                    <li>UI/UX Design</li>
                                    <li>Branding</li>
                                    <li>Consulting</li>
                                    <li>animation</li>
                                    <li>illustration</li>
                                </ul>
                            </StyledServices>

                            <StyledOtherServices>
                                <h4>non design services</h4>
                                <ul>
                                    <li>modeling</li>
                                </ul>
                            </StyledOtherServices>

                            <StyledActions>
                                <div>
                                    <StyledIcon>
                                        <HeartIcon style={{fill: "#EFDA6D"}}/>
                                    </StyledIcon>
                                    <span>download</span>
                                </div>

                                <div>
                                    <StyledIcon>
                                        <UploadIcon style={{stroke: "#EFDA6D"}}/>
                                    </StyledIcon>
                                    <span>share</span>
                                </div>
                            </StyledActions>
                        </StyledSidebar>
                    </StyledSection>
                </Container>
            </StyledWrapper>
        </AnimatedPage>
    );
}
 
export default About;