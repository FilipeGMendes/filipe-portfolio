const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 16, suffix: "+", label: "Years Playing Games" },
    { value: 1, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
    {
        //imgPath: "/images/logos/company-logo-1.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Desire To Achieve Greatness",
        desc: "Ambition To Create A Game Of The Year Award–winning game.",
    },
    {
        imgPath: "/images/chat.png",
        title: "No Filler, Just Fun",
        desc: "Every Asset, System, And Line Of Code Serves A Purpose. Nothing Wasted",
    },
    {
        imgPath: "/images/time.png",
        title: "Timeless Art",
        desc: "I Treat Game Development Like Creating Lasting Art ",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "Unreal Engine",
        modelPath: "/models/unreal_engine_logo.glb",
        scale: 0.013,
        rotation: [0, 0, 0],
        position: [0, -1.5, 0],
    },
    {
        name: "Game Design",
        modelPath: "/models/gamepad.glb",
        scale: 1.5,
        rotation: [Math.PI / 2, 0, 0],
        position: [0, -1, 0],
    },
    {
        name: "Level Design",
        modelPath: "/models/lego_brick.glb",
        scale: 1.3,
        rotation: [Math.PI / 4, 20, 0],
        position: [0, 0, 0],
    },
    {
        name: "Game Testing",
        modelPath: "/models/safety_helmet.glb",
        scale: 1.3,
        rotation: [Math.PI / 4, 45, 0],
        position: [0, 0, 0],
    },
];

const expCards = [
    {
        review: "",
        imgPath: "/images/MasterDLogo.png",
        logoPath: "/images/MasterDLogo.png",
        title: "3D Game Programming Student",
        date: "June 2024 - June 2025",
        responsibilities: [
            "Learn Unity fundamentals and C# programming.",
            "Develop 2 2D Games Using Unity",
            "Develop 1 3D Game Using Unity",
        ],
    },
    {
        review: "Piscine - Done || Common Core - Incomplete",
        imgPath: "/images/42lisboaLogo.png",
        logoPath: "/images/42logo.png",
        title: "42 Lisbon student",
        date: "February 2024 - June 2024",
        responsibilities: [
            "Learn C under a month. Pass 4 exams.",
            "Evaluate others.",
            "Expand knowledge",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
