import portfolio_img_1 from 'img/portfolio/portfolio-1.png';
import portfolio_img_2 from 'img/portfolio/portfolio-2.png';
import portfolio_img_3 from 'img/portfolio/portfolio-3.png';
import portfolio_img_4 from 'img/portfolio/portfolio-4.png';
import portfolio_img_5 from 'img/portfolio/portfolio-5.png';

import { dataSkills } from '../skills/dataSkills';

export const dataPortfolio = [
  {
    id: '1',
    title: 'WebStudio',
    skills: [dataSkills[0], dataSkills[1], dataSkills[2]],
    url: portfolio_img_1,
    link: 'https://fredy228.github.io/goit-markup-hw-08/',
  },
  {
    id: 2,
    title: 'IceCream',
    skills: [dataSkills[0], dataSkills[1], dataSkills[2]],
    url: portfolio_img_2,
    link: 'https://fredy228.github.io/goit-icecream/',
  },
  {
    id: 3,
    title: 'Filmoteka',
    skills: [dataSkills[0], dataSkills[1], dataSkills[2], dataSkills[7]],
    url: portfolio_img_3,
    link: 'https://fredy228.github.io/Filmoteka/',
  },
  {
    id: 4,
    title: 'SolarMan',
    skills: [
      dataSkills[0],
      dataSkills[1],
      dataSkills[2],
      dataSkills[7],
      dataSkills[3],
      dataSkills[10],
    ],
    url: portfolio_img_4,
    link: 'https://solarman.pro/',
  },
  {
    id: 5,
    title: 'Server for SolarMan',
    skills: [
      dataSkills[5],
      dataSkills[6],
      dataSkills[8],
      dataSkills[12],
      dataSkills[13],
    ],
    url: portfolio_img_5,
    link: 'https://github.com/Fredy228/solarman-server-ts',
  },
].reverse();
