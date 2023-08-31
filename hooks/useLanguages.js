import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import store from '../store/index';

const getDefaultLanguage = () => 'en'; // Change this to your default language

const useLanguages = () => {
  const router = useRouter();

  const getLocaleFromUrl = () => {
    const { query } = router;
    return query.lang || getDefaultLanguage();
  };

  const setLocaleInUrl = (loc) => {
    const { pathname, asPath } = router;
    //const updatedQuery = { ...query, lang: locale };
    //router.push({ pathname, query: updatedQuery }, asPath, { shallow: true });
    router.push(pathname, asPath, { locale: loc });
  };

  const handleLanguageChange = (locale) => {
    setLocaleInUrl(locale);
    
    store.dispatch({
      type: "SET_ACTIVE_LANG",
      activeLang: locale
    });
  };

  const values = useMemo(
    () => ({
      getLocaleFromUrl,
      setLocaleInUrl,
      handleLanguageChange
    }),
    [getLocaleFromUrl, setLocaleInUrl, handleLanguageChange],
  );

  return values;
};

export default useLanguages;
