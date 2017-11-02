import { Startup } from '../models/startup.interface';

export const startupList: Startup[] = [
    {
        name: 'GiveBackHack',
        tagLine: 'The launchpad for social impact.',
        description: 'We bring community together to create and launch sustainable solutions for social impact',
        logo: {
            img: 'GiveBackHack',
            link: 'https://pbs.twimg.com/profile_images/670280549135613952/dHCMviC-_400x400.png',
            destination: 'https://givebackhack.com/'
        },
        socialLinks: [
            {
                name: 'website',
                class: 'fa fa-globe',
                destination: 'https://givebackhack.com/'
            },
            {
                name: 'linkedin',
                class: 'fa fa-linkedin-square',
                destination: 'https://www.linkedin.com/company/givebackhack',
            },
            {
                name: 'twitter',
                class: 'fa fa-twitter-square',
                destination: 'https://www.twitter.com/GBHCleveland'
            },
            {
                name: 'facebook',
                class: 'fa fa-facebook-square',
                destination: 'https://www.facebook.com/GBHCleveland'
            }
        ]
    },
    {
        name: 'ExpenseBot',
        tagLine: 'Fast and powerful expense management.',
        description: 'ExpenseBot makes your company\'s expense reporting easier every step of the way. See how your team can spend up to 80% less time on expense reports.',
        logo: {
            img: 'Expensebot',
            link: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/264620-2a69e1c284db1b20458a187bb72fd499-medium_jpg.jpg?buster=1474573013',
            destination: 'https://expensebot.com/'
        },
        socialLinks: [
            {
                name: 'facebook',
                class: 'fa fa-globe',
                destination: 'https://expensebot.com/'
            }
        ]
    }
];
