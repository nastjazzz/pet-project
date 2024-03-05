import { useState } from "react";
import { classNames } from "shared";

import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle} type="button">
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* <LangSwitcher /> */}
            </div>
        </div>
    );
};
