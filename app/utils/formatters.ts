export const formatNumber = (number: number) => {
    if(!number) return '0';

    const digits = Math.abs(number).toString().length;
    const tier = Math.floor((digits - 1) / 3);
    const units = ['','k','M','B','T','q'];

    if(tier === 0) return number.toString();

    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;

    return `${scaled.toFixed(1).replace(/\.0/, '')}${units[tier]}`;
}