export const exerciseOption = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options)=>{
    const responce = await fetch(url,options);
    const data = await responce.json();

    return data;
}