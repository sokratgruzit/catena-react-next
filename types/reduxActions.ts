export type ConnectAction = { type: 'LOGOUT' } | 
  { type: 'TOGGLE_WALLET_CONNECT_MODAL'; payload: boolean } | 
  { type: 'GET_OPT_ENABLED'; otp_enabled: boolean } | 
  { type: 'GET_ACCOUNT'; account: string } | 
  { type: 'UPDATE_STATE'; [key: string]: any } | 
  { type: 'CONNECTION_ERROR'; payload: string };

export type FavoritesAction = { type: 'ADD_FAVORITE_TOKEN'; payload: string } | 
{ type: 'ADD_FAVORITE_POOL'; payload: string } | 
{ type: 'REMOVE_FAVORITE_TOKEN'; payload: string } | 
{ type: 'REMOVE_FAVORITE_POOL'; payload: string };

export type AppAction = { type: 'SET_TRIED_RECONNECT'; payload: boolean } | 
{ type: 'SET_ROUTER_QUERY'; payload: Record<string, any> } | 
{ type: 'SET_USER'; payload: null | Record<string, any> } | 
{ type: 'SET_STEP'; payload: number };

export type SettingsAction = { type: 'SET_SLIPPAGE'; slippage: number } | 
{ type: 'SET_LOCALES'; locales: string[] } |
{ type: 'SET_ACTIVE_LANG'; activeLang: string } |
{ type: 'SET_ACTIVE_COLOR_MODE'; activeColorMode: string } |
{ type: 'SET_MICROSCHEME_ARRAY'; microschemeArray: any[] };

export type NftAction = { type: 'SET_NFTS'; payload: any[] } | 
{ type: 'SET_NFTS_COPY'; payload: any[] } |
{ type: 'SET_NEW_ARRIVALS'; payload: any[] };