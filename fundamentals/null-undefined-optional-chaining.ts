//undefined means that JS variable has yet not been initialized, it's just defined.
//At the time of defination of any var JS assign a defualt values. ie. undefined

let title: string;

console.log("title = "+ title);

if(!title) {
    console.log("THe value of title not known yet!")
}

//null means that the variable is not holding any value currently but it can be assigned with any value and can be re assigned with null again

let title2: string = null;

console.log("title = "+ title2);

if(!title2) {
    console.log(`The value of title is ${title2}!`)
}