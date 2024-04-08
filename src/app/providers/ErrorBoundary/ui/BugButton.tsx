import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared';

// just for test
export const BugButton = () => {
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
