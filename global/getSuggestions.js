export let sugg;
export let food;

const APIS = [
    {
        app_id: "f67c67f9",
        app_key: "da63644b655fc055473fdfa0e46687cb"
    },
    {
        app_id: "765b91fc",
        app_key: "e582122608852d74a7ccf60823b15e13"
    },
    {
        app_id: "d47a6e15",
        app_key: "da20e3e0832a4d6c055487af110002ec"
    },
    {
        app_id: "042d5ff0",
        app_key: "10a9f873a380f7a2b2abb8de34569968"
    },
    {
        app_id: "54a7d6e5",
        app_key: "1c30a691926feb9f4f7f9210ef97b202"
    },
];
let index = 0;

const getSugg = async(range, api) =>{
    const meals = ["burger", "shawarma", "pizza", "sushi", "pie", "cake", "cookie", "salad", "roast"];
    const suggestions = async(search) =>{
        const req = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${api.app_id}&app_key=${api.app_key}&from=0&to=5`);
        const res = await req.json();
        const result = res.hits;
        let sugges = [];
        for(var i=0;i<result.length;i++) {
            sugges.push(result[i].recipe);
        }
        return sugges;
    }
    const num = Math.floor(Math.random() * range);
    return suggestions(meals[num])
}

getSugg(5,APIS[index]).then(res => sugg = res);
getSugg(9,APIS[index]).then(res => food = res);

if(index < 5){
    index++;
}else{
    index = 0;
}
