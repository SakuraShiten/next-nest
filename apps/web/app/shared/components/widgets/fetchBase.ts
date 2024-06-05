type FetchBaseOptions<TParams, TOptions> = TOptions & {
    params: TParams
}

export const fetchBase = async <TParams, TOptions, TResult>
(
    func: () => TResult,
    params: TParams,
    options: FetchBaseOptions<TParams, TOptions>
) => {
    return func([...params ],{
        ...options
    })
    // return func(options.params, {
    //     baseUrl: 'http://localhost:5000',
    //     cache: 'force-cache',
    //     next: {tags: [`pages-${JSON.stringify(options.params)}`]},
    //     ...options
    // })
}