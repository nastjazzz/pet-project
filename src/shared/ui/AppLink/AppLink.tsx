import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    PRIMARY_INVERTED = 'primaryInverted',
    SECONDARY = 'secondary',
    SECONDARY_INVERTED = 'secondaryInverted'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
