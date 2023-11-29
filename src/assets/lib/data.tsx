import adobeilsicon from "../../assets/icons/adobeilsicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import jqueryicon from "../../assets/icons/jqueryicon.svg";
import cobolicon from "../../assets/icons/cobolicon.svg";
import postgresqlicon from "../../assets/icons/postgresqlicon.svg";
import intellijicon from "../../assets/icons/intellijicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import oracleicon from "../../assets/icons/oracleicon.svg";
import oracleapexicon from "../../assets/icons/oracleapexicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import springbooticon from "../../assets/icons/springbooticon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import javaicon from "../../assets/icons/javaicon.svg";
import visualscicon from "../../assets/icons/visualscicon.svg";
import eclipseicon from "../../assets/icons/eclipseicon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    es: "Hola, Soy Santiago",
    en: "Hi, I'm Santiago",
  },
  subtitle: "Junior Software Engineer",
  description: {
    es: "Soy Santiago, Estudiante sexto semestre de Ingeniería de Sistemas, Experiencia de 1 año como Desarrollador de Software Junior!",
    en: "I am Santiago, Sixth semester student of Systems Engineering, 1 year experience as a Junior Software Developer!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contactame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Proyectos",
      label: {
        es: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const experienceData = [
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      experiencecolor: "#FFD5BD",
    },
  },
  {
    title: "Sitel 2021-2022",
    description:
      "Call-Center Agent in Customer Service for the Iberia campaign, a world-renowned airline, where I performed skills such as talking to customers, customer service, and assertive communication. I learned to use the Amadeus tool, a tool which is widely used in the tourism and aviation sector.",
    description_EN:
      "Call-Center Agent in Customer Service for the Iberia campaign, a world-renowned airline, where I performed skills such as talking to customers, customer service, and assertive communication. I learned to use the Amadeus tool, a tool which is widely used in the tourism and aviation sector.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Mas proyectos en GitHub",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "JQuery",
        hash: "#JQuery",
        icon: jqueryicon,
        color: "#007ACC",
      },
      {
        title: "Visual Studio Code",
        hash: "#VSC",
        icon: visualscicon,
        color: "#007ACC",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe Ilustrator",
        hash: "#Adobe Ilustrator",
        icon: adobeilsicon,
        color: "#FEAA2B",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataBackend = [
  {
    skillsTitle: "Back-End",
    skills: [
      { title: "Java",
        hash: "#Java",
        icon: javaicon, 
        color: "#F24E1E" },
      {
        title: "SpringBoot",
        hash: "#SpringBoot",
        icon: springbooticon,
        color: "#FEAA2B",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#FEAA2B",
      },
      {
        title: "php",
        hash: "#php",
        icon: phpicon,
        color: "#FEAA2B",
        
      },
      { title: "COBOL", 
        hash: "#COBOL", 
        icon: cobolicon, 
        color: "#00C4CC" 
      },
      { title: "Oracle Apex", 
        hash: "#Oracle Apex", 
        icon: oracleapexicon, 
        color: "#00C4CC" 
      },
      { title: "Oracle PL-SQL/SQL", 
        hash: "#Oracle PL-SQL/SQL", 
        icon: oracleicon, 
        color: "#00C4CC" 
      },
      { title: "PostgreSQL", 
        hash: "#PostgreSQL", 
        icon: postgresqlicon, 
        color: "#00C4CC" 
      },
      { title: "MySQL", 
        hash: "#MySQL", 
        icon: mysqlicon, 
        color: "#00C4CC" 
      },
      { title: "IntelliJ", 
        hash: "#IntelliJ", 
        icon: intellijicon, 
        color: "#00C4CC" 
      },
      { title: "Eclipse", 
        hash: "#Eclipse", 
        icon: eclipseicon, 
        color: "#00C4CC" 
      },
    ],
  },
] as const;


export const navLinks = [
  { es: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { es: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Experiencia", en: "Experience", hash: "#experience", icon: GoProject },
  { es: "Sobre mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "Imprint", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { es: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:sanpri2003@gmail.com",
  text: "sanpri2003@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/sanpri2003/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/unbosquesprietogo",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:sanpri2003@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"No es nada importante hacerlo bien la primera vez. Es de vital importancia hacerlo bien la última vez."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    es: '"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre mi",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_ES: [
    {
      title: "Hablando de Codigo...",
      description:
        "Habilidades técnicas y de software, conocimientos en programación JAVA orientada a objetos, desarrollo web Front-end (HTML, CSS, JavaScript) y Backend en JAVA EE y SpringBoot, manejo básico de servidores Unix, programación Shell Linux, conocimiento en Git y GitHub",
      icon: hardwareicon,
    },
    {
      title: "¿Quién soy yo?...",
      description:
        "Cualificado como una persona comunicativa, con liderazgo y habilidades de trabajar en equipo, capacidad para desarrollar nuevas alternativas con eficiencia, eficacia y valores éticos como honestidad, responsabilidad y cumplimiento.",
      icon: caricon,
    },
    {
      title: "Disponible para viajar...",
      description:
        "Mi flexibilidad y disposición para desplazarme a diferentes ubicaciones son una extensión natural de mi compromiso con el éxito de los proyectos y la colaboración efectiva. Estoy emocionado ante la perspectiva de contribuir a equipos dinámicos en cualquier parte del mundo y estoy seguro de que mi pasión por los viajes se traducirá en un aporte valioso para el logro de los objetivos de la empresa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Speaking of Code...",
      description:
        "Technical and software skills, knowledge of object-oriented JAVA programming, Front-end web development (HTML, CSS, JavaScript) and Backend in JAVA EE and SpringBoot, basic handling of Unix servers, Linux Shell programming, knowledge of Git and GitHub.",
      icon: hardwareicon,
    },
    {
      title: "Who I am?...",
      description:
        "Who am I?...Qualified as a communicative person, with leadership and teamwork skills, ability to develop new alternatives with efficiency, effectiveness and ethical values such as honesty, responsibility and compliance.",
      icon: caricon,
    },
    {
      title: "Available to travel...",
      description:
        "My flexibility and willingness to move to different locations are a natural extension of my commitment to project success and effective collaboration. I am excited at the prospect of contributing to dynamic teams anywhere in the world and am confident that my passion for travel will translate into a valuable contribution to achieving company objectives.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escríbeme un mensaje y me comunicaré contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Tu nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        es: "Por favor, pon tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "Tu E-Mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, pon tu email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Tu Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, pon tu asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Tu mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, pon tu mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Acepto que Santiago pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that Santiago may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingExperience: {
    es: "🦄 Al enviar esta solicitud, reconoce que ha leído la Política de privacidad. La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Gracias por su correo electrónico. Me comunicaré contigo lo antes posible",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Por favor, pon tu nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
