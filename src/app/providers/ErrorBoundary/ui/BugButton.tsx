import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared';

interface BugButtonProps {
    className?: string;
}

// just for test
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const toggleState = () => {
        setError((prev) => { return !prev; });
    };

    return (
        <Button onClick={toggleState}>{t('ThrowError')}</Button>
    );
};
