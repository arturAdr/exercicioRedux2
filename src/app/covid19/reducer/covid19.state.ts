export interface Covid19State {
    data: any[];
    loading: boolean;
}

export const initialState: Covid19State = {
    data: [],
    loading: false
};
