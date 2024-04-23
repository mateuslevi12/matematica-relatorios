export async function fetchData<T>(method: () => Promise<T>, setData: (data: T) => void) {
    try {
        const data = await method();
        setData(data);
        console.log(JSON.stringify(data, null, 2));
    } catch (err) {
        console.log(err);
    }
}