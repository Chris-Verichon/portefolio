import react from 'src/assets/images/atom.png';
import htmlBig from 'src/assets/images/html-5big.png';
import cssBig from 'src/assets/images/cssBig.png';
import jsBig from 'src/assets/images/jsBig.png';
import sassBig from 'src/assets/images/sassBig.png';
import typescriptBig from 'src/assets/images/typescriptBig.png';
import phpBig from 'src/assets/images/phpBig.png';
import nodejsBig from 'src/assets/images/nodejsbig.png';

const data = [
  {
    firstName: 'Verichon',
    lastName: 'Christophe',
    jobtitle: 'Développeur web fullstack',
    birthday: '28/08/1989',
    gender: 'Homme',
    skillsFront: [
      {
        id: 1,
        skillName: 'HTML5',
        logo: htmlBig,
      },
      {
        id: 2,
        skillName: 'CSS3',
        logo: cssBig,
      },
      {
        id: 3,
        skillName: 'SASS',
        logo: sassBig,
      },
      {
        id: 4,
        skillName: 'JavaScript',
        logo: jsBig,
      },
      {
        id: 5,
        skillName: 'TypeScript',
        logo: typescriptBig,
      },
      {
        id: 6,
        skillName: 'REACT',
        logo: react,
      },
      {
        id: 7,
        skillName: 'REDUX',
        logo: '',
      },
      {
        id: 8,
        skillName: 'Axios',
        logo: '',
      },
    ],
    skillsBack: [
      {
        id: 1,
        skillName: 'PHP',
        logo: phpBig,
      },
      {
        id: 2,
        skillName: 'Symfony',
        logo: '',
      },
      {
        id: 3,
        skillName: 'NodeJs',
        logo: nodejsBig,
      },
      {
        id: 4,
        skillName: 'JavaScript',
        logo: jsBig,
      },
    ],
    bdd: [
      {
        id: 1,
        skillName: 'MariaDB',
        logo: '',
      },
      {
        id: 2,
        skillName: 'SQL',
        logo: '',
      },
      {
        id: 3,
        skillName: 'MySQL',
        logo: '',
      },
    ],
  },
];

export default data;
