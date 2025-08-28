const getTheTitles = function(books) {
  let titles = [];
  books.forEach(element => {
    titles.push(element.title);
  });
  return titles;
};

getTheTitles([
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ])

// Do not edit below this line
module.exports = getTheTitles;
