import { useQuery } from '@apollo/client'
export const useQueries = (query) => {
    const { data, loading, error } = useQuery(query)
    let d = { data, loading, error }
    return d
}