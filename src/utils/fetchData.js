export const fetchData = async (url,options)=>{
    const responce = await fetch(url,options);
    const data = await responce.json();

    return data;
}