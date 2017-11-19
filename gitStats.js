"use strict";

var lists = document.querySelectorAll(".contrib-person .Box");
var totalCommits = 0;
var username, commit, percent;
var githubPercent = {};

function gitHub(username, commit, percent)
{
    this.username = username;
    this.commit = commit;
    this.percent = percent;
}

Array.prototype.forEach.call(lists, function(el, i)
{
	totalCommits += parseInt(el.querySelector(".cmeta .link-gray").text.replace(",",""));
});
Array.prototype.forEach.call(lists, function(el, i)
{
	username = el.querySelector("a.text-normal").text;
	commit = parseInt(el.querySelector(".cmeta .link-gray").text.replace(",",""));
	percent = parseFloat(commit / totalCommits * 100).toFixed(2);
	githubPercent[i] = new gitHub(username, commit, percent);
});

console.table(githubPercent);
