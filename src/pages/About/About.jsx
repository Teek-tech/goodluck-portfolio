import Container from '../../components/Container/Container'
import { HeartIcon } from '@heroicons/react/solid'
import { UploadIcon } from '@heroicons/react/outline';
import { StyledWrapper, StyledSection, StyledMainSection, StyledSidebar, StyledIntro, StyledSkillsSection, StyledSkills, StyledSkill, StyledServices, StyledOtherServices, StyledActions, StyledIcon } from './styles';


const About = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledSection>
                    <StyledMainSection>
                        <StyledIntro>
                            <h3>Introduction</h3>
                            <p>My country name is Goodluck Junior Allen. <br /> I specialize in solving  complex  problems through design thinking  and with  a wide range of experience.</p>
                        </StyledIntro>

                        <StyledSkillsSection>
                            <h3>skills</h3>
                            <StyledSkills>
                                <div>
                                    <StyledSkill>
                                        <h4>product design</h4>
                                        <p>
                                            UI Design, Prototyping, User empathy, Interaction design, Mini-interaction design Productt Design Specification, Documentation, Qualitative user research, Product Analysis
                                        </p>
                                    </StyledSkill>
                                </div>
                                <div>
                                    <StyledSkill>
                                        <h4>Conceptualization</h4>
                                        <p>Sketching, Storyboarding, Animation Sprites</p>
                                    </StyledSkill>

                                    <StyledSkill>
                                        <h4>web design</h4>
                                        <p>HTML, CSS, JAVA SCRIPT (I only understand how they work. I dislike coding)</p>
                                    </StyledSkill>
                                </div>
                                <div>
                                    <StyledSkill>
                                        <h4>Communication</h4>
                                        <p>Fluent in American English and pidgin english</p>
                                    </StyledSkill>

                                    <StyledSkill>
                                        <h4>ideation</h4>
                                        <p>Brainstorming, Sketching, Mind Mapping, Storyboarding, Bodystorming</p>
                                    </StyledSkill>
                                </div>
                            </StyledSkills>
                        </StyledSkillsSection>

                    </StyledMainSection>
                    <StyledSidebar>
                        <StyledServices>
                            <h3>my services</h3>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Branding</li>
                                <li>Consulting</li>
                                <li>animation</li>
                                <li>illustration</li>
                            </ul>
                        </StyledServices>

                        <StyledOtherServices>
                            <h3>non design services</h3>
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
    );
}
 
export default About;