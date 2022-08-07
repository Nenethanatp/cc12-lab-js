let ask = (question,yes,no) =>{
    if (confirm(question)) {return yes()}
    else return no();
}

ask('Do you agree?', 
  function() { alert('You agreed.'); },
  function() { alert('You canceled the execution.'); }
);
