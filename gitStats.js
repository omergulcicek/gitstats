"use strict";

var lists = document.querySelectorAll(".contrib-person .Box");
var totalCommits = 0;
var username, commit, percent = 0;
var githubPercent = {};

function gitHub(username, commit, percent)
{
    this.username = username;
    this.commit = commit;
    this.percent = percent;
}

Array.prototype.forEach.call(lists, function(el, i)
{
	totalCommits += parseInt(lists[i].firstChild.lastChild.firstChild.firstChild.text.replace(",",""));
});

Array.prototype.forEach.call(lists, function(el, i)
{
	username = lists[i].firstChild.children["2"].text;
	commit = parseInt(lists[i].firstChild.lastChild.firstChild.firstChild.text.replace(",",""));
	percent = parseFloat(commit / totalCommits * 100).toFixed(2);
	githubPercent[i] = new gitHub(username, commit, percent);
});

console.table(githubPercent);
