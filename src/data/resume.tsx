import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  FacebookIcon,
  Instagram,
  YoutubeIcon,
} from "lucide-react";

export const DATA = {
  name: "Charlie Nguyen",
  initials: "VT",
  url: "https://dillion.io",
  location: "Van Quan, Ha Dong, Hanoi",
  locationLink: "",
  description:
    "Front-End Developer with a passion for building beautiful and functional web applications. I love learning new technologies and collaborating with others.",
  summary:
    "I'm a **Front-End Developer** with **1 year of experience** being best friends with **React.js** and **Vue.js**, and maintaining a solid \"relationship\" with **HTML**, **CSS**, and **JavaScript**. Beyond mastering **Agile Scrum** methodologies, I have a knack for \"hacking\" into my teammates' minds to generate **creative and unique ideas**. If you're looking for someone who can code and crack a joke to lighten the team's mood, I'm the **missing piece** you've been searching for!",
  avatarUrl: "/CV-photo.jpg",
  skills: [
    "JavaScript",
    "Node.js",
    "React",
    "VueJS",
    "Sass",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Photoshop",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vawntan.dev@gmail.com ",
    tel: "+84 867 556 636",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vantan22",

        icon: Icons.github,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/vantan22",
        icon: FacebookIcon,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/vantan22/",
        icon: Instagram,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@1977Vlog",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vawntan.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CMC Global",
      href: "https://cmcglobal.com.vn/vi/home-vi/",
      badges: [],
      location: "On-site",
      title: "Front-End Developer",
      logoUrl: "/cmc.png",
      start: "Dec 2022",
      end: "Jan 2024",
      description: "",
    },
    {
      company: "Samsung SDS",
      badges: [],
      href: "https://www.samsungsds.com/vn/index.html",
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/sds.png",
      start: "Jun 2023",
      end: "Jan 2024",
      description: "",
    },
    {
      company: "1977 Vlog",
      href: "https://www.facebook.com/1977vlog",
      badges: [],
      location: "On-site",
      title: "Actor",
      logoUrl: "/1977.png",
      start: "Aug 2019",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "Hanoi University of Business and Technology",
      href: "https://hubt.edu.vn/",
      degree: "Bachelor of Information Technology",
      logoUrl: "/hubt.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Máy bơm Vũ Anh",
      href: "https://maybomvuanh.com/",
      dates: "Dec 2023 - Present",
      active: true,
      description:
        "This application revolutionizes warehouse management for pumps by integrating advanced serial number scanning capabilities. Beyond just tracking inventory, it offers robust features such as real-time stock updates, automated reporting, and seamless categorization of products based on their specifications. Designed for efficiency, the app minimizes manual errors, optimizes inventory turnover, and enhances overall operational productivity. Whether you're managing a small warehouse or a large-scale operation, this application is your all-in-one solution for smarter inventory control.",
      technologies: ["NextJs", "Tailwind CSS", "Shacdn UI", "Go"],

      links: [
        {
          type: "Website",
          href: "https://maybomvuanh.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/may-bom.png",
      video: "",
    },
    {
      title: "Huyndai Vĩnh Yên",
      href: "https://hyundaivinhyen.com.vn/",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Hyundai Vinh Yen was established on October 13, 2009, with the legal name Vinh Phuc Import-Export Trading & Service Joint Stock Company under the Viet Financial Group. With an area of over 6000m2 and a total investment of over 45 billion VND, it was built according to Hyundai's global 3S standards. Hyundai Vinh Yen features an elegant and sophisticated showroom, and a service workshop equipped with modern facilities. Hyundai Vinh Yen provides professional warranty maintenance, repair services, and genuine replacement parts.",
      technologies: ["Vanilla", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://hyundaivinhyen.com.vn/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/huyn-vinh-yen.png",
      video: "",
    },
    {
      title: "Huyndai Giải Phóng",
      href: "https://huyndai-giaphong.com",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Hyundai Giai Phong is a unit specializing in distributing genuine products, spare parts and after-sales services of Hyundai Korea.",
      technologies: ["Vanilla", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://huyndai-giaphong.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/huyn-giai-phong.png",
      video: "",
    },
    {
      title: "Simple Task",
      href: "#",
      dates: "Apr 2024 - Present",
      active: true,
      description:
        "Simple Task is a lightweight and efficient task management system designed to help users organize and track their daily tasks with ease. Built using modern technologies such as React, Vite, Node.js, and MongoDB, it offers a fast and intuitive user experience. The system allows users to create, manage, and prioritize tasks, ensuring better productivity and organization. With real-time updates and a clean interface, Simple Task provides a seamless workflow for individuals and teams alike.",
      technologies: ["React", "Vite", "Express", "Mongodb", "Firebase"],
      links: [ 
      ],
      image: "/simple-task.png",
      video: "",
    },
    {
      title: "Sally",
      href: "#",
      dates: "June 2023 - January 2024",
      active: true,
      description:
        "Sally is a Digital Transformation Assessment (DTA) tools for customers. It provides a simple survey for users and serves a simple assessment result. And It supports marketing campaigns to collect and manager customer data.",
      technologies: ["Java", "Javascript", "Vue", "Webflux", "Mongodb"],
      links: [],
      image: "/sally-project.png",
    },
    {
      title: "Social Network",
      href: "https://github.com/Vantan22/sn-net-public.git",
      dates: "January 2023 - April 2023",
      active: true,
      description:
        "The Social Network Platform is a modern web application built using React.js and Firebase. It provides a seamless environment for users to connect, share, and interact with content in real-time. The platform supports instant messaging, media sharing, and user profile management, making social engagement easier and more personalized. Firebase ensures fast and secure data storage, authentication, and scalability, delivering a smooth experience for both casual and active users.",
      technologies: [
        "ReactJS",
        "Antd",
        "Vite",
        "Firebase",
        "Firebase Hosting",
        "Firestore",
        "Firebase Storage",
        "Firebase Authentication",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vantan22/sn-net-public.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sn-net.gif",
      video: "",
    },
    {
      title: "Monoly",
      href: "#",
      dates: "December 2022 - June 2023",
      active: true,
      description: `MONOLY is a project about managing task and communication, includes three functions below: 
        Discussion: Multi-party Communication
        Cross-company business communication becomes more private, more concise, and faster.
        eSignature: Electronic Document Signing
        Confidentiality is guaranteed as an agreement is shared only between interested parties.
        Drive: Secure File Sharing & Storage
        Share files with anyone without worrying about security and compliance violations.`,
      technologies: ["React", "Redux", "material-UI", "Web-socket"],
      links: [

      ],
      image: "/monoly.png",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
