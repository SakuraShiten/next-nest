export const ISOToDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
}