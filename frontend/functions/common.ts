export const requestData2 = async (url: string, method: string, data) => {
    const r = await requestData(url, method, data);
  
    let rr = [];
  
    for(let i of r.elements) {
      rr.push({id: i.id, name: i.translated.name, description: i.translated.description, price: i.calculatedPrice.totalPrice});
    }
  
    return rr;
}
  
export const requestData = async (url: string, method: string, data) => {
    const response = await fetch(url, {
        method: method,
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            "sw-access-key": "SWSCMDV3N2DIOUNZTKNNCTBBCW"
        },
        body: JSON.stringify(data)
    });
  
    const r = await response.json();
  
    return r;
}
