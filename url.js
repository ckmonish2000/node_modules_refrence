var url=require('url');

const  myurl= new URL('https://in.search.yahoo.com/yhs/web?hspart=omr&hsimp=yhs-001&type=87fjnhltxzm000820&param1=y6bdVFVIsvuYsgEClQfz8NEPSp4FWG51g5cOG5gIsG6bzp8e0A6vjE0EaVgECZtOi%2FUGRibWKNMultBm3RVZKQvBE7fWESc8SmqHx7zWOrO%2F6WMJ1aphn71cq5Y%2FHicVh%2BIGYxQsbBl0TlPhi3JIbq0wp9yUfnYOrKHoj5CezWCyu%2Fd4saz1t1EPC6eHyouS9EH7nNy0SqU5pylVPhNiHOyzzf8%2BwHoBfv03fmoNYKUYmOhm5aWOZFe2c07eWIJHgx9i5HTNFd6HuYXrK9YhRlwOVL583kCj9N5jIYY7SkiqN3HNrs66iHgJwRLY%2Bh9g2sok9Y%2B1fNU9FAQ4MgThuiov7g%2BRmVZM7DqosacQZfhTgIfbu%2FiP%2FWjXhyzw0FNKoLxXW5l5JvsqoGcCG%2FA7%2BA%3D%3D');

// serialize

console.log(myurl.href);

console.log(myurl.toString());


// host

console.log(myurl.host);

// pathname
console.log(myurl.pathname);

// query

console.log(myurl.search);

// params obj
console.log(myurl.searchParams);


// add params

myurl.searchParams.append('abd',123);
console.log(myurl.searchParams);

// loop throught params

myurl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));