import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import jay_profile from './Jay-Profile.jpg';
import jay_logo from './jay-logo.png';
import jay_logo_dark from './jay-logo-dark.png';
import jay_image from './Jay-Image.jpg'
import postgresql from './postgresql.png'

export const assets = {
    postgresql,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    jay_profile,
    jay_logo,
    jay_logo_dark,
    jay_image
};

export const workData = [
    {
        title: 'LiveLink',
        description: 'Real Time Chat App',
        bgImage: '/chat-app.png',
        ref: 'https://github.com/jaydhurve09/Realtime-Chat-App'
    },
    {
        title: 'Wealth Wave',
        description: 'An AI Stock Trading app',
        bgImage: '/wealthwave.png',
        ref: 'https://wealthwavetech.vercel.app/',
    },
    {
        title: 'GithubInsight',
        description: 'Github Repo Analyze',
        bgImage: '/git-repo-analyzer.png',
        ref: 'https://caffine-code-rsoc-2025.vercel.app/'
    },
    {
        title: 'Glowing Pong',
        description: 'A multiplayer pong game',
        bgImage: '/glowing-pong.jpg',
        ref: 'https://github.com/jaydhurve09/Pong-Game'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    // { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Frameworks', description: 'Java, JavaScript, Python, React Js, Next Js, Node JS, PHP' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: `B.Tech in CSE Cyber Security, Diploma in Computer Engineering` },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Developed a variety of impactful projects, showcasing creativity and technical expertise.' }
];

export const toolsData = [
    assets.vscode, assets.postgresql, assets.mongodb, assets.figma, assets.git
];