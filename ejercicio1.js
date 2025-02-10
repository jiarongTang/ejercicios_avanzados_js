const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
let categoria = [];

for(let element of movies){
    for(let i = 0; i< element.categories.length; i++){
        if(!categoria.includes(element.categories[i])){
            categoria.push(element.categories[i]);
        }
    }
}

console.log(categoria);