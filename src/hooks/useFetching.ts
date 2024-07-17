import {useState} from "react";

type FetchingCallback = () => Promise<void>;

type UseFetchingReturnType = [
    () => Promise<void>,
    boolean,
    string
];

export const useFetching = (callback : FetchingCallback): UseFetchingReturnType => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError ] = useState('')
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        }
        catch (e) {
            setError(JSON.stringify(e))
        }
        finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}