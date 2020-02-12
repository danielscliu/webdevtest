Q1: Is the keyword "fixes" the only way to auto-close an issue from a PR 
(pull request). Is there other keywords that can accomplish the same thing?

Q2: Do you have to create a new PR EVERYTIME you want to close an issue,
or is it possible to close multiple issues within a single PR? If so, 
how?

Q3: Provide an example of using map that is different from the one I have done.
Your example must use map both as a named function declaration and with an
anonymous function. 

Within comments, explain exactly what map is doing. Finally, why is the
"transformation function" we discussed in class sometimes referred to 
as a callback function. 

1) The following keywords that can auto-close an issue include: {close, closes, closed,
 fix, fixes, fixed, resolve, resolves, resolved} For closing specific issues the correct syntax is:
[KEYWORD #ISSUE NUMBER], eg : Fixes #10, or Resolved #10 etc, several other method are described in 
github's official documentation
https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword

2) For closing multiple issues in a pull-requests; we can use the Syntax in the format as a list: 
[Resolves #(issue number), Fixed #(issue number), etc etc] 


3)As an excerpt from my assignment for 

// 
let weirdText = document.querySelector(".paragraph").innerText;

b = weirdText.split('');
counter = 0;

c = b.map(function(c) {
    if (c === ' ') return c;
    if ((counter % 2) === 0) {
        counter++;
        return c.toUpperCase()
    }
    counter++;
    return c.toLowerCase()
});
newText = (c.join(''));
// The functions is a callback because every element in the Arr is called upon. In my function above, what we have done is split a string into its' 
respective Arr of characters. Since we are wanting to capializing the every other letter we can use a counter to keep track of the odd and even letters
whilst having a condition to return c when we hit an empty space ['']. The map in this case is calling the function onto each of the individiuals characters
and performing a stringoperation (toUpperCase) or lower whether the counter is positive or negative. When we encounter a space the counter is adjusted and the
map function is called again, so that the counter does not reset. (This way we can ensure that ['a', 'b',' ' ,'c'] has a different counter for 'c' at the 
second iteration. // 



