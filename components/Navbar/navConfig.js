export const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Services",
        children: [
            { label: "Web & Mobile Apps", href: "/services" },
            { label: "API Development", href: "/services" },
            { label: "Payment Integration", href: "/services" },
            { label: "Custom Solution", href: "/services" },
        ],
    },
    {
        label: "Solutions",
        children: [
            { label: "SMS Platform", href: "/solutions" },
            { label: "Voting Platform", href: "/solutions" },
            { label: "PMS Platform", href: "/solutions" },
            { label: "Charity Platform", href: "/solutions" },
        ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
];
