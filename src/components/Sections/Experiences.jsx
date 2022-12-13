import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "Functional Analyst",
    title: "Centro de formación e información ambiental.",
    content:
      "Analysis and documenting process, technical and business requirements. \n\rValidate users and developer definitions. \n\rVerifying compliance of the requirements from the user´s point of view.\n\rCreate Gantts and progress reports.\n\rActive participation on deploy and implementation of the apps, and use reports",
  },
  {
    id: 2,
    year: "2014 - 2020",
    degree: "Fullstack Developer",
    title: "Centro de formación e información ambiental.",
    content:
      "Sistema Integral de Gestión Ambiental (SIGAWEB):\nApp developed to control and audit environmental inspections, Sample Management, And intimate Commercial places \nDeveloped in Php 7.x, Symfony3.x and MySql\n\nSistema Integral de gestión Ambiental móvil (SIGAWEB MOBILE): \nApp developed to make inspections in situ, providing a cuestionary\nintegrating goberment web services to obtain geographical (Google maps and USIG) and historical information of comercial places\nDeveloped in Ionic, AngularJS and sqlite.\n\nLicencias :\nApp developed to record the entry and exit of employess.\nDeveloped in Php 5.1 and SqlServer 2008.\n\n Ruidos:\nApp Android To record decibels and data of the cars, and buses.\nDeveloped in Android and SQLite",
  },
  {
    id: 1,
    year: "2020 - 2022",
    degree: "FrontEnd Developer",
    title: "Worldwide Asset Exchange",
    content:
      "Assets display: admin page to display NFTs, Developed in ReactJS, Angular and Solidity\nMarketplace:Page to buy and sell assets Developed in React and GO\nCMS: developed in React and GO."
  },
  {
    id: 1,
    year: "2017 - 2020",
    degree: "Fullstack Developer",
    title: "Ministerio de Salud de la nación Argentina",
    content:
      "Certificado médico Oficial Digital:\npage to consult medical records, available to the entire country.\nDeveloped in Symfony 4.x and Twig\n\nCarga Territorial: \nApp to allow the social workers to obtain Argentinians data in situ. It can create charts and reports to make decisions.\n\nGestion de tickets: Front End developed in Angular 8.x\n\ncertificado médico oficial digital: Front developed to convert data to pdf, developed in angular 8.x"
  },
  {
    id: 1,
    year: "2015 - 2017",
    degree: "Fullstack Developer",
    title: "Autoridad de Cuenca Matanza Riachuelo (ACUMAR)",
    content:
      "",
  },
  {
    id: 1,
    year: "2014 - 2015",
    degree: "Fullstack Developer",
    title: "Universidad nacional de la mantanza",
    content:
      "",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
