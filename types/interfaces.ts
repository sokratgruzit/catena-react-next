export interface ConnectState {
    isConnected?: boolean;
    providerType?: string;
    walletModalOpen?: boolean;
    account?: string;
    chainId?: number | string;
    otpEnabled?: boolean;
    connectionError?: string;
    balance?: number | bigint;
}

export interface TokensFavState {
    tokens: string[];
    pools: string[];
}

export interface AppState {
    triedReconnect: boolean;
    user: null | Record<string, any>;
    routerQuery: Record<string, any>;
}

export interface Locale {
    title: string;
    code: string;
}

export interface SettingsState {
    slippage: number;
    txDeadlines: number;
    locales: Locale[]; 
    activeLang: string;
    activeColorMode: string;
    microschemeArray: any[]; 
}

export interface NftState {
    nfts: any[]; 
    nftsCopy: any[]; 
    newArrivals: any[]; 
}

export interface FooterProps {
    active?: boolean;
    fixed?: boolean;
}

export interface MainSliderProps {
    test: string;
    trans: [][];
}
