import Maraka from '../../../assets/maraka.png';
import MarakaAdmin from '../../../assets/marakaAdmin.png';
import Iproduct from '../Interfaces/Iproduct';
import MarakaVid from '../../../assets/marakaVid.mp4';
import MarakaAdminVid from '../../../assets/marakaAdminVid.mp4';
export let productSet:Iproduct[] = [
    {
        name: "Maraka",
        image: Maraka,
        created: 2022,
        videoAd:MarakaVid,
        information: [
            {
                category: {
                    "name": "Android Application",
                    "key":"mobile"
                },
                client: "Mr Mohanoe Mphuthing",
                due: "15 January 2023",
                url: "https://play.google.com/store/apps/details?id=com.maraka.maraka",
                description:"A free market place platform from small scale to large that would be on android and IOS. It is to be downloaded from appstore. Which is developed with Flutter framework for front End , strapi framework for backend and a desktop administration application with flutter. Call me for a source code"
            }
        ]
    },
        {
        name: "Maraka Adminstration",
        image: MarakaAdmin,
        created: 2022,
        videoAd:MarakaAdminVid,
        information: [
            {
                category: {
                    name: "Windows Application",
                    key:"desktop"
                },
                client: "Mr Mohanoe Mphuthing",
                due: "15 January 2023",
                url: "",
                description:"An administration desktop application (Windows and MACOS) for Maraka mobile app, which is developed with Flutter framework for front End , strapi framework for backend, call me for a source code"
            }
        ]
    },
    // {
    //     name: "Maraka",
    //     image: Maraka,
    //     created: 2022,
    //     videoAd:"",
    //     information: [
    //         {
    //             category: {
    //                 name: "Android Application",
    //                 key:"mobile"
    //             },
    //             client: "Mr Mohanoe Mphuthing",
    //             due: "15 January 2023",
    //             url: "https://play.google.com/store/apps/details?id=com.maraka.maraka",
    //             description:"A free market place platform from small scale to large that would be on android and IOS. It is to be downloaded from appstore. Which is developed with Flutter framework for front End , strapi framework for backend and a desktop administration application with flutter. Call me for a source code"
    //         }
    //     ]
    // },
    //     {
    //     name: "Maraka",
    //     image: Maraka,
    //     videoAd:"",
    //     created: 2022,
    //     information: [
    //         {
    //             category: {
    //                 name: "web application",
    //                 key:"web"
    //             },
    //             client: "Mr Mohanoe Mphuthing",
    //             due: "15 January 2023",
    //             url: "https://play.google.com/store/apps/details?id=com.maraka.maraka",
    //             description:"A free market place platform from small scale to large that would be on android and IOS. It is to be downloaded from appstore. Which is developed with Flutter framework for front End , strapi framework for backend and a desktop administration application with flutter. Call me for a source code"
    //         }
    //     ]
    // }
];