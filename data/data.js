/* eslint-disable react/jsx-key */
const userData = {
  name: "Laroybafi Ahmad",
  designation: "Software Engineer",
  avatarUrl: "/avatar.png",
  email: "laroybafiahmad@gmail.com",
  phone: "+6285649355973",
  address: "Surabaya, East Java, Indonesia",
  about: {
    title:
      "I'm Laroy. I'm a web developer, data engineer and UI designer",
    description: [
      `Hello, you can call me Ahmad. I am graduated bachelor's degree from Sepuluh Nopember Institute of Technology, Information Systems Department, focusing on Data Acquisition & Information Disemination Laboratories. I have a big passion for data-related activity, and I think data is the main commodity in the future that will drive business to get more competitive. I love the challenge of working in the consulting industry, and I pride myself on working together as a team, meeting deadlines and helping businesses reach their utmost potential.`, 
      <br/>,<br/>,
      `I work on projects including websites, web apps, web scraping, data engineering and analytics, digital marketing, also web and graphic design. During my previous role at Gosocial Indonesia, I handled several projects such as social media management and optimization, MSME business consulting to growth their digital marketing, website development and their business branding. I was able to handle up to 10 clients when I was a project operation lead at Gosocial Indonesia.`, 
      <br/>,<br/>,
      `Furthermore, in my role as a project operation lead, I analyze social media marketing data and engagement growth in each content posted by the team and visualize that information using tools such as Google Data Studio and present it to clients every month. Apart from that, I also have a passion for software engineering and data science. I have freelance website development experience using the latest frameworks such as Laravel, Vue and React. I also have experience in data science and data engineering. I have a strong interest in data science and data engineering, and I am currently working on a project to develop a web application`,
    ],
  },
  contact: {
    title: "Contact Me",
    description: [`For any sort of help or inquiries, feel free to send me an email and I'll get back to you soon.`],
    hire:"Want to hire me as a freelancer?",
    schedule: "Schedule a free consultation with me and we can discuss about your project.",
    calendly: "https://calendly.com/laroybafi/15min",
  },
  techstack: {
    title: "Tech Stack",
    list : [
      {
        title: "React",
        img: "/techstack/react.png",
      },
      {
        title: "Next JS",
        img: "/techstack/nextjs.png",
      },
      {
        title: "Vue JS",
        img: "/techstack/vuejs.png",
      },
      {
        title: "Nuxt JS",
        img: "/techstack/nuxtjs.png",
      },
      {
        title: "Tailwind",
        img: "/techstack/tailwind.png",
      },
      {
        title: "Bootstrap",
        img: "/techstack/bootstrap.png",
      },
      {
        title: "Laravel",
        img: "/techstack/laravel.png",
      },
      {
        title: "Tensorflow",
        img: "/techstack/tensorflow.png",
      },
      {
        title: "Pytorch",
        img: "/techstack/pytorch.png",
      },
      {
        title: "PostgreSQL",
        img: "/techstack/postgresql.png",
      },
      {
        title: "MySQL",
        img: "/techstack/mysql.png",
      },
      {
        title: "Figma",
        img: "/techstack/figma.png",
      },
    ],
  },
  projects: {
    title: "Projects",
    list : [
      {
        category: "Web Development",
        title: "Personal Website Portfolio Using NextJS and TailwindCSS",
        link: "https://github.com/laroybafi/my-portfolio"
      },
      {
        category: "Web Development",
        title: "Personal Website Resume Using Bootstrap",
        link: "https://github.com/laroybafi/Bootstrap-CV"
      },
    ],
  },
  blogs: {
    title: "Blogs",
    list : [
      {
        category: "Machine Learning",
        title: "Klasifikasi Teks Review Tokopedia (NLP) menggunakan SVM dan Naive Bayes dengan Python",
        img: "/images/card-example-6.jpeg",
        src_image:"/medium.png",
        link: "https://medium.com/@laroybafia/klasifikasi-teks-review-tokopedia-nlp-menggunakan-svm-dan-naive-bayes-dengan-python-977f37ec8142"
      },
      {
        category: "Web Development",
        title: "Personal Website Portfolio Using NextJS and TailwindCSS",
        img: "/images/card-example-2.jpeg",
        src_image:"/medium.png",
        link: "https://medium.com/@laroybafia/klasifikasi-teks-review-tokopedia-nlp-menggunakan-svm-dan-naive-bayes-dengan-python-977f37ec8142"
      },
    ],
  },
  socialLinks: {
    title: "Social Links",
    facebook: "https://facebook.com/roylabafi",
    instagram: "https://instagram.com/laroybafia",
    twitter: "https://twitter.com/bafiiii",
    linkedin: "https://linkedin.com/in/laroybafi",
    github: "https://github.com/laroybafi",
    medium: "https://medium.com/@laroybafia",
    kaggle:"https://www.kaggle.com/laroybafia",
    dribble:"https://dribbble.com/laroybafia",
    myresume: "https://drive.google.com/file/d/1rEXuZbcJ0J61QoDHoaiuY5piH5kZ6yi8/view?usp=sharing",
  },
  experience: {
    title: "Experiences",
    list : [
      {
        company: "PT Data Integra Dinamika",
        link:"https://datadinamika.com/",
        logo: "/experience/vuejs.png",
        position: "Frontend Web Developer - (Sept 2021 – Now)",
        description: "•	Develop Web Based Information System Management, Role : Front End Developer, Tech used: Vue.js, Vuex, REST API. Handle all client project such as website development, social media management, product photos, animated videos and other services from GoSocial ",
      },
      {
        company: "Gosocial Indonesia",
        link:"https://www.gosocial.co.id/",
        logo: "/experience/gosocial.jpg",
        position: "Content Lead - (Sept 2021 – Nov 2021)",
        description: "•	Manage all social media content for GoSocial Indonesia and Client (Planning, Posting and Reporting) Tech used: Clickup, Adobe Illustrator, Canva, Facebook Business Suite, Google Data Studio"
      },
      {
        company: "Gosocial Indonesia",
        link:"https://www.gosocial.co.id/",
        logo: "/experience/gosocial.jpg",
        position: "Project Operation Lead - (Apr 2021 – Aug 2021)",
        description: "•	Handle all client project such as website development, social media management, product photos, animated videos and other services from GoSocial. Handle all client project such as website development, social media management, product photos, animated videos and other services from GoSocial"
      },
      {
        company: "Gosocial Indonesia",
        link:"https://www.gosocial.co.id/",
        logo: "/experience/gosocial.jpg",
        position: "Account Executive - (Apr 2020 – Mar 2021)",
        description: "In my first role, I start my career as a Account Executive which handle all chat in 8 Hours of Office Work and 12 Hours of Online Work every day with dozens of customers every day Make sure the project completed well"
      },
    ],
  },
  certification: {
    title: "Certification",
    list : [
      {
        publisher: "SAP University Alliances",
        title: "ERP Practice using SAP ERP with GBI 3.0 Dataset",
        link: "https://drive.google.com/file/d/1hOyF4xdX26AFuXEWierbQ1wbhcgWsI1T/view?usp=sharing"
      },
      {
        publisher: "CISCO Networking Academy",
        title: "Introduction to Cyber Security",
        link: "https://drive.google.com/file/d/1IFQyFJRqtGkXVFC3wiMdItNUesQxlVN6/view?usp=sharing"
      },
      {
        publisher: "ORACLE Academy",
        title: "Artificial Intelligence with Machine Learning in Java",
        link: "https://drive.google.com/file/d/1zUKm2WUcKvdmr0CI90UO0IEHWDVb-PKH/view?usp=sharing"
      },
      {
        publisher: "ORACLE Academy",
        title: "Java Fundamentals",
        link: "https://drive.google.com/file/d/1rDd-ZIky8Pd38A0IJoT1G22RtLaR-jua/view?usp=sharing"
      },
    ],
  },
  recommendation: {
    title: "Recommendation",
    list : [
      {
        name: "Ivan Althirafi",
        position:"CEO GoSocial Indonesia",
        photo: "/avatars/avatar-8.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
      },
      {
        name: "Novyant Syahputra",
        position:"CEO Vyant Prosound and Software Engineer",
        photo: "/avatars/avatar-9.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
      },
      {
        name: "Amir Mutashim Billah",
        position:"Backend Engineer",
        photo: "/avatars/avatar-10.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
      },
    ],
  },
};

export default userData;
