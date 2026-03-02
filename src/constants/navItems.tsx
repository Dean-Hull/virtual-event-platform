import { AppView } from "@/routes/appView";

export const navItems = [
    { name: 'Home', href: '/', view: AppView.HOME },
    { name: 'Explore', href: '/explore', view: AppView.EXPLORE },
    { name: 'Speakers', href: '/speakers', view: AppView.SPEAKERS },
    { name: 'Keynote', href: '/keynote', view: AppView.KEYNOTE },
]