const examples = {
    search: 'Вася',
    take: 10,
}

// search=Вася&take=10

function toQueryType(example) {
    const result = [];
    for (const key in example) {
        result.push(`${key}=${example[key]}`)
    };
    return result.join('&');
};

console.log(toQueryType(examples));
