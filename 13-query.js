const examples = {
    search: 'Вася',
    take: 10,
}

// search=Вася&take=10
function toQueryType(example) {
    return `search=${this.search}&take=${this.take}`;
}

console.log(toQueryType(examples))



