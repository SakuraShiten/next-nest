type FetchBaseOptions<TParams, TOptions> = TOptions & {
    params: TParams
}

export const fetchBase = async <TParams, TOptions, TResult>
(
    func: (data: TParams, options: TOptions) => TResult,
    options: FetchBaseOptions<TParams, TOptions>
) => {
    return func(options.params, {
        baseUrl: 'http://localhost:5000',
        cache: 'force-cache',
        next: {tags: [`pages-${JSON.stringify(options.params)}`]},
        ...options
    })
}