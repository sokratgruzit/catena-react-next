import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';
import { useConnect } from '../../hooks/useConnect';
import { useAppSelector } from '../../store';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const { account } = useConnect();
    const { locale, query } = router;
    const address = useAppSelector(state => state.connect.account);
    const user = useAppSelector(state => state.appState.user);
    const checkConnection = address || account ;
    
    useEffect(() => {
        if (!checkConnection) {
            router.push('/', undefined, { ...query, locale });
        } else if (checkConnection) {
            if (user && (!user.step || user.step < 2)) {
                router.push(`/profile/create?locale=${locale}&address=${checkConnection}`);
            }
            
            if (user && user.step === 3) {
                router.push(`/profile/${checkConnection}`, undefined, { ...query, locale });
            }
        }
    }, [account]);

    return children;
};

export default ProtectedRoute;
