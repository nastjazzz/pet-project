import { AppLink, AppLinkTheme, classNames } from "shared";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

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
