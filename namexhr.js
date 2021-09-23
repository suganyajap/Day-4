const getBlogs=()=>
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const blogs=xhr.response;
        for(let blog of blogs)
        {
            console.log("Country name = "+blog.name);
            console.log("region = "+blog.region);
            console.log("subregion = "+blog.subregion);
            console.log("population = "+blog.population);
        }
    };
    xhr.send();
};
getBlogs();