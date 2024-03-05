import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("pages/main");

    return <h1>{t("title")}</h1>;
};

export default MainPage;
