import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useConnect } from '../../hooks/useConnect';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { account } = useConnect();
    const { locale, query } = router;
    const address = useSelector(state => state.connect.account);
    const user = useSelector(state => state.appState.user);
    const checkConnection = address || account;

    useEffect(() => {
        if (!checkConnection) {
            router.push('/', undefined, { ...query, locale });
        } else if (checkConnection) {
            if (user && (!user.step || user.step < 2)) {
                router.push('/profile/create', undefined, { ...query, locale, address: checkConnection });
            }
            
            if (user && user.step === 3) {
                router.push(`/profile/${checkConnection}`, undefined, { ...query, locale });
            }
        }
    }, [account]);

    return children;
};

export default ProtectedRoute;
