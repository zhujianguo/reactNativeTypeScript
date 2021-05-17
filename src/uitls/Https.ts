export async function post(url:string,data:object) {
    const result = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return result.json(); 
}