const examples = {
    search: 'Вася',
    take: 10,
}

// search=Вася&take=10
function toQueryType(example) {
    return `search=${example.search}%take=${example.take}`;
}

console.log(toQueryType(examples));



