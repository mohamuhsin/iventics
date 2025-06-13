import {
    MessageSquareText,
    Vote,
    ServerCog,
    HeartHandshake,
    Laptop,
    Link as LinkIcon,
    Cpu,
    Wifi,
} from "lucide-react";

export const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },

    {
        label: "Services",
        children: [
            {
                groupLabel: "Development",
                items: [
                    {
                        label: "Web & Mobile Apps",
                        href: "/services/web-mobile-apps",
                        icon: Laptop,
                        description: "Custom websites and mobile applications.",
                    },
                    {
                        label: "API & Payment Integration",
                        href: "/services/api-payment",
                        icon: LinkIcon,
                        description: "Integrate payments and APIs seamlessly.",
                    },
                ],
            },
            {
                groupLabel: "ICT & Telecom",
                items: [
                    {
                        label: "ICT Services & Solutions",
                        href: "/services/ict-solutions",
                        icon: Cpu,
                        description: "IT infrastructure and support services.",
                    },
                    {
                        label: "Fiber and Telecom Services",
                        href: "/services/fiber-telecom",
                        icon: Wifi,
                        description: "Reliable fiber and telecom connectivity.",
                    },
                ],
            },
        ],
    },

    {
        label: "Solutions",
        children: [
            {
                groupLabel: "Platforms",
                items: [
                    {
                        label: "SMS Platform",
                        href: "/solutions/sms-platform",
                        icon: MessageSquareText,
                        description: "Send bulk SMS with ease and analytics.",
                    },
                    {
                        label: "Voting Platform",
                        href: "/solutions/voting-platform",
                        icon: Vote,
                        description: "Secure and real-time voting system.",
                    },
                    {
                        label: "PMS Platform",
                        href: "/solutions/pms-platform",
                        icon: ServerCog,
                        description: "Manage projects, tasks, and progress.",
                    },
                    {
                        label: "Charity Platform",
                        href: "/solutions/charity-platform",
                        icon: HeartHandshake,
                        description: "Accept and track donations seamlessly.",
                    },
                ],
            },
        ],
    },

    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
];
