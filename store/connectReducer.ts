import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConnectState } from '../types/interfaces';

const INIT_STATE: ConnectState = {
  isConnected: false,
  providerType: '',
  walletModalOpen: false,
  account: '',
  chainId: '',
  otpEnabled: false,
  connectionError: '',
  balance: 0,
};

const connectReducer = createSlice({
  name: "connect",
  initialState: INIT_STATE,
  reducers: {
    setLogout: (state, action: PayloadAction<{
      isConnected: boolean,
      providerType: string,
      walletModalOpen: boolean,
      account: string,
      chaingId: string,
      otpEnabled: boolean,
      connectionError: string,
      balance: number
    }>) => {
      return {
        isConnected: false,
        providerType: '',
        walletModalOpen: false,
        account: '',
        chainId: '',
        otpEnabled: false,
        connectionError: '',
        balance: 0,
      };
    },
    setToggleConnectModal: (state, action: PayloadAction<{ walletModalOpen: boolean }>) => {
      return {
        ...state,
        walletModalOpen: action.payload.walletModalOpen
      };
    },
    setOtpEnabled: (state, action: PayloadAction<{ otpEnabled: boolean }>) => {
      return {
        ...state,
        otpEnabled: action.payload.otpEnabled
      };
    },
    setAccount: (state, action: PayloadAction<{ account: string }>) => {
      return {
        ...state,
        account: action.payload.account
      };
    },
    setUpdateState: (state, action: PayloadAction<{ updatedState: ConnectState }>) => {
      return {
        ...state,
        ...action.payload.updatedState
      };
    },
    setConnectionError: (state, action: PayloadAction<{ connectionError: string }>) => {
      return {
        ...state,
        connectionError: action.payload.connectionError
      };
    }
  }
});

export default connectReducer.reducer;
export const {
  setAccount,
  setUpdateState,
  setConnectionError,
  setLogout,
  setOtpEnabled,
  setToggleConnectModal
} = connectReducer.actions;
