import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useConnect } from '../../hooks/useConnect';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { locale, address } = router;
    const { account } = useConnect();

    useEffect(() => {
        if (!account) {
            router.push('/', undefined, { locale });
        }
    }, []);

    return children;
};

export default ProtectedRoute;
