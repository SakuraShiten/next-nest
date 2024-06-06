export const ISOToDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleString()
}