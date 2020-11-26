import logo from '../../logo.svg';
import './About.css';
import Fast from '../../IMG/Fast.png';
import Ampoule from '../../IMG/Ampoule.png';
import Teamwork from '../../IMG/Teamwork.png';
import Polyvalent from '../../IMG/Polyvalent.png';
import SkillBar from 'react-skillbars';
import Flip from 'react-reveal/Flip';

function About() {
  const skills = [
    { type: "C#", level: 85 },
    { type: "C", level: 75 },
    { type: 'C++', level: 50 },
  ];
  const colors =
  {
    bar: 'blue',
    title: {
      text: 'blue',
      background: '#fff'
    }
  };

  return (
    <div className="About">
      <div className="About-header">
        <h2>About</h2>
      </div>
      <div className="Main-Asset">
        <div className="HexagonParent">
          <div className="Hexagon1">
            <Flip left delay={300}>
              <img src={Fast} />
            </Flip>
            <h3>Fast</h3>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.</p>
          </div>
          <div className="Hexagon1">
            <Flip left delay={400}>
              <img src={Ampoule} />
            </Flip>
            <h3>Fast Learner</h3>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.</p>
          </div>
        </div>
        <div className="HexagonParent">
          <div className="Hexagon1">
            <Flip right delay={500}>
              <img src={Polyvalent} />
            </Flip>
            <h3>Polyvalent</h3>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.</p>
          </div>
          <div className="Hexagon1">
            <Flip right delay={600}>
              <img src={Teamwork} />
            </Flip>
            <h3>TeamWork</h3>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.</p>
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="Profil">
          <h2>Profil</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="SkillBars">
          <h2>Skill</h2>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default About;
