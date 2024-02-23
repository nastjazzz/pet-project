import { classNames } from "shared";

import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY} className={cls.link}>
                    Main
                </AppLink>

                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY} className={cls.link}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
