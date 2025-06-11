export const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Services",
        children: [
            { label: "Web Development", href: "/services" },
            { label: "Mobile Apps", href: "/services" },
        ],
    },
    {
        label: "Solutions",
        children: [
            { label: "SMS Platform", href: "/solutions" },
            { label: "Voting System", href: "/solutions" },
            { label: "PMS System", href: "/solutions" },
            { label: "Charity Platform", href: "/solutions" },
        ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
];
