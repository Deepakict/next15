type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface ApiClientOptions {
    method?: HttpMethod
    body?: any
    headers?: Record<string, string>
    signal?: AbortSignal // For cancellation or timeout
}

export const apiClient = async <T>(
    url: string,
    { method = 'GET', body, headers = {}, signal }: ApiClientOptions = {}
): Promise<T> => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        signal,
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    const res = await fetch(url, options)

    if (!res.ok) {
        try {
            const errorJson = await res.json()
            throw new Error(errorJson.message || `Error ${res.status}`)
        } catch {
            const errorText = await res.text()
            throw new Error(errorText || `Error ${res.status}`)
        }
    }

    return res.json()
}