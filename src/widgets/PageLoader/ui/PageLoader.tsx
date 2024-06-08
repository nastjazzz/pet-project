import { Loader, classNames } from 'shared';

import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames('page__loader', {}, [className])}>
      <Loader />
    </div>
  );
};
