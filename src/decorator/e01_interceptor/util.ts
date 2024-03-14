export function formattedDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Zero-pad month
    const day = String(now.getDate()).padStart(2, '0');  // Zero-pad day
    const hour = String(now.getHours()).padStart(2, '0');   // Zero-pad hours
    const minute = String(now.getMinutes()).padStart(2, '0'); // Zero-pad minutes
    const second = String(now.getSeconds()).padStart(2, '0'); // Zero-pad seconds
    return `${year}-${month}-${day} / ${hour}:${minute}:${second}`;
}