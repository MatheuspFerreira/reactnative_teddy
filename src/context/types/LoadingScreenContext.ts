export interface ILoadingContext {
    loading:boolean;
    setLoading:(value:boolean) => void;
    toggleLoading:()=>void;
}


export interface LoadingContextProviderProps {
    children:React.ReactNode
}
