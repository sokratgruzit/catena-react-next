import { useRouter } from 'next/router';
import { useMemo } from 'react';
import store from '../store/index';

const getDefaultLanguage = () => 'en'; // Change this to your default language

const useLanguages = () => {
  const routerQuery = store.getState().appState.routerQuery;
  const router = useRouter();

  const getLocaleFromUrl = () => {
    const { query } = router;
    return query.lang || getDefaultLanguage();
  };

  const setLocaleInUrl = (loc) => {
    const { pathname, asPath, query } = router;
    router.push(pathname, asPath, { ...query, locale: loc });
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
