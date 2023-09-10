import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useConnect } from '../../hooks/useConnect';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { account } = useConnect();
    const { locale, query } = router;
    const address = useSelector(state => state.connect.account);
    const checkConnection = address || account;

    useEffect(() => {
        if (!checkConnection) {
            router.push('/', undefined, { ...query, locale });
        }
    }, []);

    return children;
};

export default ProtectedRoute;
