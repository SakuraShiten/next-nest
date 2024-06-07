export const cyrillicToLatin = (str: string) => {
    const ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
        'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у',
        'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    const en = ['a', 'b', 'v', 'g', 'd', 'e', 'e', 'zh', 'z', 'i', 'y',
        'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u',
        'f', 'h', 'c', 'ch', 'sh', 'sch', '', 'y', '', 'e', 'yu', 'ya']
    return str.toLowerCase().replace(/ /g, '-').split('').map(char => {
        const index = ru.indexOf(char)
        return index === -1 ? char : en[index]
    }).join('')
}