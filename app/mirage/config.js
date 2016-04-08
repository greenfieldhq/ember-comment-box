export default function() {
  let comments = [
    { id: 1, author: 'Yehuda Katz', text: 'This is one comment' },
    { id: 2, author: 'Tom Dale', text: 'This is *another* comment' }
  ];

  this.get('/api/comments', () => {
    return comments;
  });

  this.post('/api/comments', (db, request) => {
    let comment = JSON.parse(request.requestBody);
    comments = comments.concat([comment]);
    return comments;
  });
}
